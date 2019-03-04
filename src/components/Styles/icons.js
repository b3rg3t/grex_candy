import styled from "styled-components";
import { Telegram } from "styled-icons/boxicons-logos/Telegram";
import { Edit } from "styled-icons/boxicons-solid/Edit";
import { Key2 } from "styled-icons/icomoon/Key2";
import { UserDetail } from "styled-icons/boxicons-solid/UserDetail";
import { DirectionsRun } from "styled-icons/material/DirectionsRun";
import { Close } from "styled-icons/material/Close";
import { Plus } from "styled-icons/fa-solid/Plus";
import { Chat } from "styled-icons/material/Chat";
import { Trashcan } from "styled-icons/octicons/Trashcan";
import { LeftArrowCircle } from "styled-icons/boxicons-regular/LeftArrowCircle";
import { UserCircle } from "styled-icons/boxicons-solid/UserCircle";

export const Tele = styled(Telegram)`
  height: 2em;
  width: 2em;
`;

export const Edi = styled(Edit)`
  height: 2em;
  width: 2em;
  padding: 5px;
`;

export const Key = styled(Key2)`
  height: 2em;
  width: 2em;
  padding: 5px;
`;

export const User = styled(UserDetail)`
  height: 2em;
  width: 2em;
`;

export const Run = styled(DirectionsRun)`
  height: 1.5em;
  width: 2em;
  padding: 2px;
`;

export const CloseAct = styled(Close)`
  height: 1.5em;
  width: 2em;
  padding: 2px;
`;

export const NewActivity = styled(Plus)`
  height: 1.2em;
  /* width: 2em; */
`;

export const ChatIcon = styled(Chat)`
  height: 1.5em;
  width: 2em;
  padding: 2px;
`;

export const Trash = styled(Trashcan)`
  height: 1.5em;
  width: 2em;
  padding: 2px;
`;

export const Tie = styled(LeftArrowCircle)`
  height: 2em;
  width: 2em;
`;

export const UserC = styled(UserCircle)`
  width: 1.5em;
  margin-top: -8px;
  margin-right: -5px;
  margin-left: 5px;
`;
