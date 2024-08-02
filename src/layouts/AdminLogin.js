import { useState } from "react";
import { db } from "../services/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Box, Button, Card, IconButton, InputAdornment, Stack } from "@mui/material";
import Iconify from "../components/shortComponents/Iconify";
import { logoName, phnValid, phnoReq, phoneRegExp, pwdLen, pwdReq, pwdValid } from "../constants";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup.js";
import { useForm } from "react-hook-form";
import FormProvider from "../components/shortComponents/FormProvider"
import RHFTextField from "../components/shortComponents/RHFTextField"
import { authSuccess } from "../actions/auth";
import { showAlert } from "../actions/alert";
import { connect } from "react-redux";

const AdminLogin = ({ showAlert, authSuccess }) => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setLoading] = useState(false);

    const LoginSchema = Yup.object().shape({
        phone_number: Yup.string().matches(phoneRegExp, phnValid).required(phnoReq),
        password: Yup.string().min(pwdLen, pwdValid).required(pwdReq),
    });

    const defaultValues = {
        phone_number: "",
        password: "",
    };

    const methods = useForm({
        resolver: yupResolver(LoginSchema),
        defaultValues,
    });

    const { handleSubmit } = methods;

    const onSubmit = async (data) => {
        console.log(data)
        try {
            // setLoading(true);
            const phoneNumber = parseInt(data.phone_number);
        console.log(phoneNumber)
            
            const q = query(collection(db, "users"), where("phone_number", "==", phoneNumber), where("password", "==", data.password));
            const querySnapshot = await getDocs(q);
            console.log(querySnapshot)
            // setLoading(false);

            if (querySnapshot.size > 0) {
                // var data = { id: querySnapshot.docs[0].id, ...querySnapshot.docs[0].data() };
                var data = querySnapshot.docs[0].data();
                console.log(data);
                authSuccess({ body: data, type: data.type });
                navigate(`/${data.type}/mnwdashboard`, { replace: true });
                // navigate("/")
            } else {
                showAlert({ text: "Invalid credientials" });
            }
        } catch (error) {
            console.log(error);
              showAlert({ text: error });
            setLoading(false);
        }
    };

    return (
        <Box sx={{ height: "100vh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Card variant="outlined" sx={{ width: { xs: "340px", sm: "30%" }, p: 2, display: "flex", alignItems: "center", flexDirection: "column" }}>
                <Box
                    component="img"
                    alt={logoName}
                    src=""
                    sx={{ height: "10%" }}
                />
                <Box p={1} />
                <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                    <Stack py={2} spacing={2}>
                        <RHFTextField name="phone_number" label="Phone number"/>

                        <RHFTextField
                            name="password"
                            label="Password"
                            type={showPassword ? "text" : "password"}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                            <Iconify icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"} />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <Button fullWidth size="large" type="submit" variant="contained">
                            Sign In
                        </Button>
                    </Stack>
                </FormProvider>
            </Card>
        </Box>
    )
}
export default connect(null, { showAlert, authSuccess })(AdminLogin);