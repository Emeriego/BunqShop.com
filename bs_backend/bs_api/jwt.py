class PersonLogoutView(APIView):
    def post(self, request):
        try:
            refresh_token = request.data['refresh_token']
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response({'message': 'Successfully logged out'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)



from rest_framework_simplejwt.tokens import RefreshToken

class PersonLoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = PersonLoginSerializer(data=request.data)
        if serializer.is_valid():
            username = serializer.validated_data['username']
            password = serializer.validated_data['password']
            user = authenticate(username=username, password=password)
            if user:
                refresh = RefreshToken.for_user(user)
                return Response({
                    'access_token': str(refresh.access_token),
                    'refresh_token': str(refresh),
                }, status=status.HTTP_200_OK)
            else:
                return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



#settings.py
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
        # other authentication classes if needed
    ),
}


pip install djangorestframework-simplejwt


import axios from 'axios';

// Login function
const loginUser = async (username, password) => {
  try {
    const response = await axios.post('http://yourdomain.com/api/login/', { username, password });
    const { access_token, refresh_token } = response.data; // Assuming the response contains both access and refresh tokens
    // Store tokens securely, e.g., in local storage
    localStorage.setItem('accessToken', access_token);
    localStorage.setItem('refreshToken', refresh_token);
    return access_token; // Returning the access token
  } catch (error) {
    console.error('Error logging in:', error);
    return null;
  }
}

// Function to refresh token
const refreshToken = async () => {
    try {
        const refreshToken = localStorage.getItem('refreshToken');
        if (!refreshToken) {
            console.error('No refresh token found');
            return null;
        }
        const response = await axios.post('http://yourdomain.com/api/token/refresh/', { refresh: refreshToken });
        const { access } = response.data;
        localStorage.setItem('accessToken', access);
        return access;
    } catch (error) {
        console.error('Error refreshing token:', error);
        return null;
    }
}

// Logout function
const logoutUser = async () => {
  try {
    await axios.post('http://yourdomain.com/api/logout/');
    // Clear tokens from storage
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    console.log('Logged out successfully');
  } catch (error) {
    console.error('Error logging out:', error);
  }
}

// Function to get access token from local storage
const getAccessToken = () => {
    return localStorage.getItem('accessToken');
}

export { loginUser, refreshToken, logoutUser, getAccessToken };

