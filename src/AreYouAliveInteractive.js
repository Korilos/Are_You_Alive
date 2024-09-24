import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import './styles.css';

export default function AreYouAliveInteractive() {
  const [stage, setStage] = useState('initial');
  const [userResponse, setUserResponse] = useState('');
  const [allResponses, setAllResponses] = useState([]);

  useEffect(() => {
    const fetchResponses = async () => {
      const response = await axios.get('https://yourdomain.com/backend.php');
      setAllResponses(response.data);
    };

    fetchResponses();
  }, []);

  const handleCheck = () => {
    setStage('result');
  };

  const handleObjection = () => {
    setStage('objection');
  };

  const handleSubmit = async () => {
    if (userResponse.trim()) {
      await axios.post('https://yourdomain.com/backend.php', { response: userResponse });
      setAllResponses([...allResponses, userResponse]);
      setUserResponse('');
      setStage('submitted');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-purple-500 to-indigo-900 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-white mb-8">Are You Alive?</h1>
      
      {stage === 'initial' && (
        <Button onClick={handleCheck} className="bg-pink-500 hover:bg-pink-600 text-white">
          Check Now
        </Button>
      )}

      {stage === 'result' && (
        <AlertDialog open={true}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Analysis Complete</AlertDialogTitle>
              <AlertDialogDescription>
                Our advanced AI has determined that you are not alive. Do you object to this result?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction onClick={() => setStage('initial')}>Accept</AlertDialogAction>
              <AlertDialogAction onClick={handleObjection}>Object</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}

      {stage === 'objection' && (
        <div className="w-full max-w-md">
          <p className="text-white mb-4">Tell us why you believe you're alive (max 300 characters):</p>
          <Input
            value={userResponse}
            onChange={(e) => setUserResponse(e.target.value.slice(0, 300))}
            className="mb-4"
            placeholder="Type your argument..."
          />
          <Button onClick={handleSubmit} className="w-full bg-green-500 hover:bg-green-600 text-white">
            Submit
          </Button>
        </div>
      )}

      {stage === 'submitted' && (
        <div className="mt-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-white mb-4">Why Others Think They're Alive:</h2>
          <ul className="space-y-2">
            {allResponses.map((response, index) => (
              <li key={index} className="bg-white bg-opacity-20 p-3 rounded-lg text-white">
                {response}
              </li>
            ))}
          </ul>
          <Button onClick={() => setStage('initial')} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white">
            Start Over
          </Button>
        </div>
      )}
    </div>
  );
}
