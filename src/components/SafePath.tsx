import react, { useState } from 'react';
import { 
  MapPin, 
  AlertOctagon, 
  Shield, 
  User, 
  Info, 
  Phone, 
  MessageCircle 
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Alert, AlertDescription, AlertTitle } from '../components/ui/alert';
import MapComponent from './MapComponent';
import { useNavigate } from 'react-router-dom';

const SafePath = () => {
  const [startPoint, setStartPoint] = useState('');
  const [endPoint, setEndPoint] = useState('');
  const [safetyTips, setSafetyTips] = useState([
    "Always stay aware of your surroundings",
    "Keep emergency contacts handy",
    "Use well-lit and populated routes",
    "Trust your instincts if something feels wrong"
  ]);

  const [emergencyContacts, setEmergencyContacts] = useState([
    { name: "Delhi Police", number: "100" },
    { name: "Women's Helpline", number: "1091" },
    { name: "Child Helpline", number: "1098" }
  ]);

  const [incidentReports, setIncidentReports] = useState<{ id: number; description: string; timestamp: string }[]>([]);
  const navigate = useNavigate();

  const handleRouteSearch = async () => {
    alert(`Searching safe route from ${startPoint} to ${endPoint}`);
    navigate('/route', { state: { start: startPoint, end: endPoint } });
  };

  const [incidentDescription, setIncidentDescription] = useState('');
  
  const handleIncidentReport = () => {
    setIncidentReports([
      ...incidentReports, 
      { 
        id: incidentReports.length + 1, 
        description: incidentDescription,
        timestamp: new Date().toLocaleString() 
      }
    ]);
    setIncidentDescription(''); // Clear the textarea after reporting
    navigate('/thank-you'); // Navigate to Thank You page
  };

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6 bg-gray-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
           {/* <img src="./src/assets/image.png" alt="SafePath Logo" />  */}
           <Shield className="h-8 w-8 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-800">SafeSphere</h1>
        </div>
        <div className="flex items-center space-x-2">
          <Button className="text-blue-600" onClick={() => navigate('/about')}>About Us</Button>
          <User className="h-6 w-6 text-blue-600" />
        </div>
      </div>

      <Alert className="bg-blue-50 border-blue-200">
        <Info className="h-5 w-5 text-blue-600" />
        <AlertTitle className="text-blue-600">Community Safety Platform</AlertTitle>
        <AlertDescription>
          Real-time safety navigation and reporting for women in Delhi
        </AlertDescription>
      </Alert>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-green-500" />
              <span>Safe Route Mapping</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
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
              <Button 
                onClick={handleRouteSearch} 
                className="w-full"
              >
                Find Safe Route
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertOctagon className="h-5 w-5 text-red-500" />
              <span>Incident Reporting</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <textarea 
                className="w-full p-2 border rounded"
                placeholder="Describe any safety concerns or incidents"
                value={incidentDescription}
                onChange={(e) => setIncidentDescription(e.target.value)}
              />
              <Button 
                className="w-full" 
                variant="destructive" 
                onClick={handleIncidentReport}>
                Report Incident
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Info className="h-5 w-5 text-yellow-500" />
              <span>Safety Tips</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {safetyTips.map((tip, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-blue-500" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-green-500" />
              <span>Emergency Contacts</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="flex justify-between items-center p-2 border-b">
                <span>{contact.name}</span>
                <a 
                  href={`tel:${contact.number}`} 
                  className="text-blue-600 hover:underline"
                >
                  {contact.number}
                </a>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SafePath;
