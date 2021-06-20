export interface Props {
  children: React.ReactNode;
}
export interface IGameContext {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
}
