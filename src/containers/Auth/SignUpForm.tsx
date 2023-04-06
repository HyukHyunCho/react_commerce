import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useIdCheck, useSignUp } from '../../hooks/useAuth';
import { useNavigate } from 'react-router';
import Layout from '../../components/common/Layout';

interface IFormValue {
  username: string;
  password: string;
  password2: string;
  phone_number: string;
  name: string;
}

export default function SignUpForm() {
  const navigate = useNavigate();
  const { handleSubmit, control, watch } = useForm<IFormValue>();

  const {
    mutate: idCheck,
    isLoading: checkLoading,
    isError: checkIsError,
    error: idCheckErr,
  } = useIdCheck();

  const {
    mutate: signup,
    isLoading: signupIsLoading,
    isError: signupIsError,
    error: signupError,
  } = useSignUp();

  const onSubmit: SubmitHandler<IFormValue> = async (formData: IFormValue) => {
    const { username } = formData;

    idCheck(username, {
      onSuccess: (res) => {
        if (res.Success) {
          signup(formData, {
            onSuccess: (res) => {
              console.log(res);
              //router.push('auth/signin');
            },
          });
        }
      },
    });
  };

  return (
    <Layout title={'회원가입'} size={400}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="username"
          control={control}
          defaultValue={''}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="아이디"
              variant="outlined"
              fullWidth
              margin="normal"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
          rules={{
            required: '아이디를 입력 해주세요.',
          }}
        />
        <Controller
          name="password"
          control={control}
          defaultValue={''}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="비밀번호"
              variant="outlined"
              fullWidth
              margin="normal"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
          rules={{
            required: '비밀번호를 입력 해주세요.',
            pattern: {
              value: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/,
              message: '영문, 숫자 조합으로 8~20자리 까지 입력 해주세요.',
            },
            minLength: {
              value: 8,
              message: '비밀번호는 8자 이상이여야 합니다,',
            },
            deps: ['password2'],
          }}
        />
        <Controller
          name="password2"
          control={control}
          defaultValue={''}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="비밀번호 확인"
              variant="outlined"
              fullWidth
              margin="normal"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
          rules={{
            required: '비밀번호 확인을 입력 해주세요.',
            pattern: {
              value: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/,
              message: '영문, 숫자 조합으로 8~20자리 까지 입력 해주세요.',
            },
            validate: (value) =>
              value === watch('password') ||
              '비밀번호가 서로 일치하지 않습니다.',
          }}
        />
        <Controller
          name="phone_number"
          control={control}
          defaultValue={''}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="휴대폰번호"
              variant="outlined"
              fullWidth
              margin="normal"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
          rules={{
            pattern: {
              value: /^01([0|1|6|7|8|9])/,
              message: '휴대폰 형식을 입력하세요 (-를 제외한 숫자만).',
            },
            minLength: {
              value: 8,
              message: '휴대폰 번호는 10자 이상 입력 해주세요.',
            },
            maxLength: {
              value: 11,
              message: '휴대폰 번호는 11자 이하 입력 해주세요.',
            },
          }}
        />
        <Controller
          name="name"
          control={control}
          defaultValue={''}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="이름"
              variant="outlined"
              fullWidth
              margin="normal"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
          rules={{
            required: '이름을 입력 해주세요.',
          }}
        />
        <Button type="submit" color="primary" variant="contained" fullWidth>
          회원가입
        </Button>
        <Button
          color="primary"
          variant="outlined"
          sx={{ marginTop: '10px' }}
          fullWidth
          onClick={() => navigate('/signin')}
        >
          로그인 페이지로
        </Button>
      </form>
    </Layout>
  );
}
