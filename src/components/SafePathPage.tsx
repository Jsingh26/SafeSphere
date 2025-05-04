import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Alert, AlertDescription, AlertTitle } from '../components/ui/alert';

const SafePathPage: React.FC = () => {
  const [startPoint, setStartPoint] = useState('');
  const [endPoint, setEndPoint] = useState('');
  const [incidentDescription, setIncidentDescription] = useState('');
  const [incidentReports, setIncidentReports] = useState<{ id: number; description: string; timestamp: string }[]>([]);

  const handleRouteSearch = () => {
    alert(`Searching safe route from ${startPoint} to ${endPoint}`);
  };

  const handleIncidentReport = () => {
    setIncidentReports([
      ...incidentReports,
      {
        id: incidentReports.length + 1,
        description: incidentDescription,
        timestamp: new Date().toLocaleString(),
      },
    ]);
    setIncidentDescription(''); // Clear the textarea after reporting
  };

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6 bg-gray-50">
      <Alert className="bg-blue-50 border-blue-200">
        <AlertTitle className="text-blue-600">Community Safety Platform</AlertTitle>
        <AlertDescription>
          Real-time safety navigation and reporting for women in Delhi
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle>Safe Route Mapping</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            placeholder="Starting Point"
            value={startPoint}
            onChange={(e) => setStartPoint(e.target.value)}
          />
          <Input
            placeholder="Destination"
            value={endPoint}
            onChange={(e) => setEndPoint(e.target.value)}
          />
          <Button onClick={handleRouteSearch} className="w-full">
            Find Safe Route
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Incident Reporting</CardTitle>
        </CardHeader>
        <CardContent>
          <textarea
            className="w-full p-2 border rounded"
            placeholder="Describe any safety concerns or incidents"
            value={incidentDescription}
            onChange={(e) => setIncidentDescription(e.target.value)}
          />
          <Button onClick={handleIncidentReport} className="w-full" variant="destructive">
            Report Incident
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Safety Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            <li>Always stay aware of your surroundings</li>
            <li>Keep emergency contacts handy</li>
            <li>Use well-lit and populated routes</li>
            <li>Trust your instincts if something feels wrong</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Emergency Contacts</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            <li>Delhi Police: 100</li>
            <li>Women's Helpline: 1091</li>
            <li>Child Helpline: 1098</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default SafePathPage;
