const handleRegSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(regData),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Registration submitted successfully! You can check back later for your status.');
        // Optionally reset form or redirect user
        setRegData({
          username: '',
          password: '',
          email: '',
          discord: '',
          steamId: '',
          reason: '',
          referrer: '',
        });
      } else {
        alert(`Error: ${result.error || 'Something went wrong.'}`);
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Failed to connect to the server.');
    }
  };