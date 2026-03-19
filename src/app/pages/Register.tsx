import { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import { Apple, Chrome, Facebook } from 'lucide-react';
import { useAuth, type SocialProvider } from '../context/AuthContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { toast } from 'sonner';

export function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSocialLoading, setIsSocialLoading] = useState<SocialProvider | null>(null);
  const { register, loginWithSocial } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !password || !confirmPassword) {
      toast.error('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }

    setIsLoading(true);
    try {
      await register(name, email, password);
      toast.success('Account created successfully!');
      navigate('/');
    } catch (error) {
      toast.error('Error creating account');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialRegister = async (provider: SocialProvider) => {
    setIsSocialLoading(provider);
    try {
      await loginWithSocial(provider);
      toast.success(`Signed up with ${provider.charAt(0).toUpperCase() + provider.slice(1)}!`);
      navigate('/');
    } catch (error) {
      toast.error('Social sign up failed');
    } finally {
      setIsSocialLoading(null);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Create Account</CardTitle>
          <CardDescription>
            Sign up to start shopping
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-2">
              <Button
                type="button"
                variant="outline"
                disabled={isLoading || isSocialLoading !== null}
                onClick={() => handleSocialRegister('apple')}
                className="w-full"
              >
                <Apple className="mr-2 h-4 w-4" />
                {isSocialLoading === 'apple' ? 'Signing up with Apple...' : 'Continue with Apple'}
              </Button>
              <Button
                type="button"
                variant="outline"
                disabled={isLoading || isSocialLoading !== null}
                onClick={() => handleSocialRegister('facebook')}
                className="w-full"
              >
                <Facebook className="mr-2 h-4 w-4" />
                {isSocialLoading === 'facebook' ? 'Signing up with Facebook...' : 'Continue with Facebook'}
              </Button>
              <Button
                type="button"
                variant="outline"
                disabled={isLoading || isSocialLoading !== null}
                onClick={() => handleSocialRegister('google')}
                className="w-full"
              >
                <Chrome className="mr-2 h-4 w-4" />
                {isSocialLoading === 'google' ? 'Signing up with Google...' : 'Continue with Google'}
              </Button>
            </div>

            <div className="relative py-1">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">Or create an account with email</span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isLoading || isSocialLoading !== null}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading || isSocialLoading !== null}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading || isSocialLoading !== null}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={isLoading || isSocialLoading !== null}
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button type="submit" className="w-full" disabled={isLoading || isSocialLoading !== null}>
              {isLoading ? 'Creating account...' : 'Create Account'}
            </Button>
            <p className="text-sm text-center text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-600 hover:underline">
                Sign in
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}