// Define the Task type
export interface Task {
    id: number;
    name: string;
    admin: {
      id: number;
      name: string;
      avatar: string;
    };
    members: {
      id: number;
      name: string;
    }[];
    status: string;
    createdAt: Date;
    runtime: number;
  }
  
  // Define the getTasks function
  export const getTasks = (): Task[] => {
    // Implementation of the getTasks function
    // This is just a placeholder implementation
    return [
      
    ];
  };
  