import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import { useLogin } from '../../hooks/useAuth';
import { useNavigate } from 'react-router';
import { setTokenCookie } from '../../util/cookie';
import { setUserTypeCookie } from '../../util/cookie';
import Layout from '../../components/common/Layout';
import Alerts from '../../components/alert';
import { AxiosError } from 'axios';

export default function SignInForm() {
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm();
  const { mutate, error } = useLogin();

  const onSubmit = async (formData: FieldValues) => {
    mutate(formData, {
      onSuccess: (res) => {
        setTokenCookie(res.token);
        setUserTypeCookie(res.user_type);
        // localStorage.setItem('access_token', res.token);
        navigate('/');
      },
    });
  };

  return (
    <Layout title={'로그인'} size={3}>
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
              type="password"
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
          }}
        />
        <Controller
          name="login_type"
          control={control}
          defaultValue={'BUYER'}
          render={({ field: { onChange }, fieldState: { error } }) => (
            <TextField
              select
              label="거래처"
              margin="normal"
              variant="outlined"
              fullWidth
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
              SelectProps={{
                native: true,
              }}
            >
              <option key={'BUYER'} value={'BUYER'}>
                {'일반 구매자'}
              </option>
              <option key={'SELLER'} value={'SELLER'}>
                {'판매자'}
              </option>
            </TextField>
          )}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
          sx={{
            '&:hover': {
              backgroundColor: '#4C4C4C',
            },
            backgroundColor: '#000',
          }}
        >
          로그인
        </Button>
        <Button
          variant="outlined"
          fullWidth
          sx={{
            mt: 1,
            color: '#000',
            border: '1px solid #d4d4d4',
            '&:hover': {
              border: '1px solid #d4d4d4',
              backgroundColor: '#EAEAEA',
            },
            backgroundColor: '#fff',
          }}
          onClick={() => navigate('/signup')}
        >
          회원가입
        </Button>
      </form>
      {error instanceof AxiosError && (
        <Alerts
          severity={'error'}
          message={error.response?.data.FAIL_Message}
        />
      )}
    </Layout>
  );
}
