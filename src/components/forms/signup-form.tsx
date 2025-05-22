'use client';
import { useForm } from '@tanstack/react-form';
import type { AnyFieldApi } from '@tanstack/react-form';
import { motion, AnimatePresence } from 'motion/react';

import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useId, useMemo, useState } from 'react';
import { CheckIcon, EyeIcon, EyeOffIcon, XIcon } from 'lucide-react';
import { validationMessages } from '@/lib/validation-messages';

function FieldError({ field }: { field: AnyFieldApi }) {
  const showError = field.state.meta.isTouched && !field.state.meta.isValid;
  return (
    <>
      <AnimatePresence>
        {showError && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="text-destructive mt-2 text-xs"
            role="region"
            aria-live="polite"
          >
            {field.state.meta.errors.join(', ')}
          </motion.p>
        )}
      </AnimatePresence>
    </>
  );
}

export default function SignupForm() {
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
    },
    onSubmit: async ({ value }) => {
      console.log(value);
    },
  });

  const id = useId();

  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => setIsVisible(prevState => !prevState);

  const checkStrength = (pass: string) => {
    const requirements = [
      { regex: /.{8,}/, text: 'حداقل ۸ کاراکتر' },
      { regex: /[0-9]/, text: 'حداقل یک رقم (۰–۹)' },
      { regex: /[A-Z]/, text: 'حداقل یک حرف بزرگ انگلیسی (A–Z)' },
      { regex: /[a-z]/, text: 'حداقل یک حرف کوچک انگلیسی (a–z)' },
      {
        regex: /[!@#$%^&*(),.?":{}|<>[\]\\\/~`+=_\-]/,
        text: 'حداقل یک علامت خاص (مثل !، @، #)',
      },

      {
        regex: /^[A-Za-z0-9!@#$%^&*(),.?":{}|<>[\]\\\/~`+=_\-\s]+$/,
        text: 'فقط حروف انگلیسی، اعداد و علائم خاص مجاز هستند',
      },
    ];

    return requirements.map(req => ({
      met: req.regex.test(pass),
      text: req.text,
    }));
  };

  const strength = checkStrength(password);

  const strengthScore = useMemo(() => {
    return strength.filter(req => req.met).length;
  }, [strength]);

  const getStrengthColor = (score: number) => {
    if (score === 0) return 'bg-border';
    if (score <= 1) return 'bg-red-500';
    if (score <= 2) return 'bg-orange-500';
    if (score === 3) return 'bg-amber-500';
    return 'bg-emerald-500';
  };

  const getStrengthText = (score: number) => {
    if (score === 0) return 'رمز عبور را وارد کنید';
    if (score <= 2) return 'رمز عبور ضعیف';
    if (score === 3) return 'رمز عبور متوسط';
    return 'رمز عبور قوی';
  };

  return (
    <div className="flex flex-col gap-y-10">
      <div className="text-center">
        <h1 className="text-lg font-bold">فرم ثبت نام</h1>
      </div>

      <form
        action=""
        onSubmit={e => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="flex flex-col items-center justify-center gap-6"
      >
        <div className="flex w-full flex-col gap-6 lg:w-3/4 lg:grid-cols-1">
          <form.Field
            name="name"
            validators={{
              onChange: ({ value }) =>
                !value
                  ? validationMessages.required('نام')
                  : value.length > 15
                    ? validationMessages.maxLength(15)
                    : !/^[\u0600-\u06FF\s]+$/.test(value)
                      ? validationMessages.onlyPersian
                      : undefined,

              onChangeAsyncDebounceMs: 500,
              onChangeAsync: async ({ value }) => {
                // Simulate an async validation
                await new Promise(resolve => setTimeout(resolve, 1000));
                value.includes('error') && 'No "error" allowed in first name';
              },
              onBlur: () => {
                console.log('onBlur');
              },
            }}
            children={field => {
              return (
                <div className="*:not-first:mt-2">
                  <Label htmlFor={field.name}>نام</Label>
                  <Input
                    autoComplete="off"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onChange={e => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                    type="text"
                  />
                  <FieldError field={field} />
                </div>
              );
            }}
          />
          <form.Field
            name="email"
            validators={{
              onChange: ({ value }) =>
                !value
                  ? validationMessages.required('ایمیل')
                  : !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/.test(value)
                    ? validationMessages.validEmail
                    : !/^[A-Za-z\s]+$/.test(value)
                      ? validationMessages.onlyEnglish
                      : undefined,

              onChangeAsyncDebounceMs: 500,
              onChangeAsync: async ({ value }) => {
                // Simulate an async validation
                await new Promise(resolve => setTimeout(resolve, 1000));
                value.includes('error') && 'No "error" allowed in first name';
              },
              onBlur: () => {
                console.log('onBlur');
              },
            }}
            children={field => {
              return (
                <div className="relative *:not-first:mt-2">
                  <Label htmlFor={field.name}>ایمیل</Label>
                  <Input
                    dir="ltr"
                    autoComplete="off"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onChange={e => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                    type="email"
                  />
                  <FieldError field={field} />
                </div>
              );
            }}
          />
          <form.Field
            name="password"
            children={field => {
              return (
                <div>
                  {/* Password input field with toggle visibility button */}
                  <div className="*:not-first:mt-2">
                    <Label htmlFor={field.name}>رمز عبور</Label>
                    <div className="relative">
                      <Input
                        autoComplete="off"
                        id={field.name}
                        className="pe-9"
                        placeholder="Password"
                        type={isVisible ? 'text' : 'password'}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        aria-describedby={`${id}-description`}
                      />
                      <button
                        className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                        type="button"
                        onClick={toggleVisibility}
                        aria-label={
                          isVisible ? 'Hide password' : 'Show password'
                        }
                        aria-pressed={isVisible}
                        aria-controls="password"
                      >
                        {isVisible ? (
                          <EyeOffIcon size={16} aria-hidden="true" />
                        ) : (
                          <EyeIcon size={16} aria-hidden="true" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Password strength indicator */}
                  <div
                    className="bg-border mt-3 mb-4 h-1 w-full overflow-hidden rounded-full"
                    role="progressbar"
                    aria-valuenow={strengthScore}
                    aria-valuemin={0}
                    aria-valuemax={4}
                    aria-label="Password strength"
                  >
                    <div
                      className={`h-full ${getStrengthColor(strengthScore)} transition-all duration-500 ease-out`}
                      style={{ width: `${(strengthScore / 4) * 100}%` }}
                    ></div>
                  </div>

                  {/* Password strength description */}
                  <p
                    id={`${id}-description`}
                    className="text-foreground mb-2 text-sm font-medium"
                  >
                    {/* {getStrengthText(strengthScore)}. */}
                    رمز عبور قوی باید شامل موارد زیر باشد:
                  </p>

                  {/* Password requirements list */}

                  <div className="grid grid-cols-2 gap-2">
                    {strength.map((req, index) => (
                      <div key={index} className="flex">
                        {req.met ? (
                          <CheckIcon
                            size={16}
                            className="text-emerald-500"
                            aria-hidden="true"
                          />
                        ) : (
                          <XIcon
                            size={16}
                            className="text-muted-foreground/80"
                            aria-hidden="true"
                          />
                        )}
                        <span
                          className={`text-xs font-light ${req.met ? 'text-emerald-600' : 'text-muted-foreground'}`}
                        >
                          {req.text}
                          <span className="sr-only">
                            {req.met
                              ? ' - Requirement met'
                              : ' - Requirement not met'}
                          </span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }}
          />
          <form.Field
            name="confirmPassword"
            validators={{
              onChange: ({ value }) =>
                !value
                  ? validationMessages.required('تکرار رمز عبور')
                  : value !== password
                    ? validationMessages.match('رمز عبور')
                    : undefined,
            }}
            children={field => {
              return (
                <div className="*:not-first:mt-2">
                  <Label htmlFor={field.name}>تکرار رمز عبور</Label>
                  <div className="relative">
                    <Input
                      autoComplete="off"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onChange={e => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
                      type={isVisible ? 'text' : 'password'}
                    />
                    <button
                      className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                      type="button"
                      onClick={toggleVisibility}
                      aria-label={isVisible ? 'Hide password' : 'Show password'}
                      aria-pressed={isVisible}
                      aria-controls="password"
                    >
                      {isVisible ? (
                        <EyeOffIcon size={16} aria-hidden="true" />
                      ) : (
                        <EyeIcon size={16} aria-hidden="true" />
                      )}
                    </button>
                  </div>
                  <FieldError field={field} />
                </div>
              );
            }}
          />
          <form.Field
            name="phone"
            validators={{
              onChange: ({ value }) =>
                !value
                  ? validationMessages.required('شماره تلفن')
                  : !/^09\d{9}$/.test(value)
                    ? validationMessages.validPhoneNumber
                    : undefined,
            }}
            children={field => {
              return (
                <div className="*:not-first:mt-2">
                  <Label htmlFor={field.name}>موبایل</Label>

                  <Input
                    autoComplete="off"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onChange={e => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                    type="text"
                  />

                  <FieldError field={field} />
                </div>
              );
            }}
          />
        </div>

        <br />
        <Button className="mt-5" type="submit">
          ثبت نام
        </Button>
      </form>
    </div>
  );
}
