import { getServerSession } from 'next-auth';
import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from 'next/types';

import { authOptions } from '../pages/api/auth/[...nextauth]';

type Req = GetServerSidePropsContext['req'] | NextApiRequest;
type Res = GetServerSidePropsContext['res'] | NextApiResponse;

export const getSession = async (req: Req, res: Res) => {
  // @ts-ignore
  return await getServerSession(req, res, authOptions);
};
