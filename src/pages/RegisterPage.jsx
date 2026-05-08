import styles from "../styles/LoginPage.module.css";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"

const loginSchema = z.object({
    name_Surname: z.string().regex(/^\S+$/, "ห้ามมีช่องว่าง").min(1,"กรุณากรอกชื่อ-นามสกุล"),
    user: z.string().regex(/\w/,"ต้องเป็นภาษาอังกฤษหรือ ตัวเลขเท่านั้น").min(3,"ต้องมีความยาว3-12 ตัวอักษร").max(12,"ต้องมีความยาว3-12 ตัวอักษร"),
    email: z.string().min(1, "กรุณากรอกอีเมล์").email("อีเมล์ไม่ถูกต้อง"),
    password: z.string().min(8, "รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร"),
    confirmPassword: z.string()//,
    //Tel: z.string().regex(/08\d{8}$/,"กรุณากรอกตัวเลข 10 ตัว")
}).refine((data)=> data.password === data.confirmPassword,{
    path:["confirmPassword"],
    message:"รหัสผ่านไม่ตรงกัน"
});

export default function RegisterPage() {


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data) => {
        alert('สมัครสมาชิกสำเร็จ!');
        console.log(data);
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Welcome to RegisterPage</h2>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.formCard}>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>Name_Surname : </label>
                    <input {...register("name_Surname")} className={styles.input}/>

                    {
                        errors.name_Surname && (<span className={styles.errorText}>{errors.name_Surname.message}</span>)

                    }
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>User : </label>
                    <input {...register("user")} className={styles.input}/>

                    {
                        errors.user && (<span className={styles.errorText}>{errors.user.message}</span>)

                    }
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>Email : </label>
                    <input {...register("email")} className={styles.input} placeholder="example@gmail.com" />

                    {
                        errors.email && (<span className={styles.errorText}>{errors.email.message}</span>)

                    }
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>Password : </label>
                    <input {...register("password")} className={styles.input} type="password"
                        placeholder="********" />

                    {
                        errors.password && (<span className={styles.errorText}>{errors.password.message}</span>)
                    }
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>Confirm Password : </label>
                    <input {...register("confirmPassword")} className={styles.input} type="password"
                        placeholder="********" />

                    {
                        errors.confirmPassword && (<span className={styles.errorText}>{errors.confirmPassword.message}</span>)
                    }
                </div>

                {/* <div className={styles.inputGroup}>
                    <label className={styles.label}>Tel : </label>
                    <input {...register("Tel")} className={styles.input} />

                    {
                        errors.Tel && (<span className={styles.errorText}>{errors.Tel.message}</span>)

                    }
                </div> */}

                <button className={styles.submitButton}>Login</button>

            </form>
        </div>
    )
}