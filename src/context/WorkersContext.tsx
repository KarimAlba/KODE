import React from "react";
import IWorker from '../models/IWorker'

const WorkersContext = React.createContext<IWorker[] | []>([]);

export default WorkersContext;