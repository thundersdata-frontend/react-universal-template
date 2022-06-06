type CommonStackParamList = {
  Privacy: undefined;
  Agreement: undefined;
};

type AuthStackParamList = {
  SignIn: undefined;
  ConfigPass: undefined;
  ForgetPass: undefined;
  Register: undefined;
  ModifyPasswordResult: undefined;
};

type MainStackParamList = {
  homepage: undefined;
  orderDetail: {
    id: number;
    name: string;
    email: string;
  };
  modifyPassword: undefined;
};

type AppParamList = AuthStackParamList & MainStackParamList & CommonStackParamList;
