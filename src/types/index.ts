export interface SafetyTip {
    id: number;
    tip: string;
  }
  
  export interface EmergencyContact {
    id: number;
    name: string;
    number: string;
  }
  
  export interface IncidentReport {
    id: number;
    description: string;
    location: string;
    timestamp: string;
    type: 'harassment' | 'unsafe-area' | 'other';
  }
  
  export interface RouteRequest {
    startPoint: string;
    endPoint: string;
  }