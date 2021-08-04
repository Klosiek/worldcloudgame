export interface Props {
  children: React.ReactNode;
}
export interface IGameContext {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  userPicks: string[];
  setUserPicks: React.Dispatch<React.SetStateAction<string[]>>;
  userPoints: number;
  setUserPoints: React.Dispatch<React.SetStateAction<number>>;
}
