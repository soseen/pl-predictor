import { createContext } from "react";

import { Team } from '../components/AppContent/app-content'

export const TeamsContext = createContext<Team[]>([]);