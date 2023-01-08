import React from "react";
import { useNavigate } from "react-router-dom";
import MemberRegisterForm from "../../components/member/MemberRegisterForm";
import { createMember } from "../../lib/api";

const MemberRegisterContainer = () => {
    const navigate = useNavigate();

    const onRegister = async (name, age) => {
        try {
            await createMember(name, age);
            alert("회원을 생성했습니다.");
            navigate("/member");
        } catch (e) {
            console.log(e);
        }
    };

    return <MemberRegisterForm onRegister={onRegister} />;
};

export default MemberRegisterContainer;
