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
  Tab: undefined;
  Homepage: undefined;
  OrderDetail: {
    order: {
      id: number;
      name: string;
      email: string;
    };
  };
  ModifyPassword: undefined;
};

type AppParamList = AuthStackParamList & MainStackParamList & CommonStackParamList;
