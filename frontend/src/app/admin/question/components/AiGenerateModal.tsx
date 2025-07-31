"use client";
import { Modal, Form, Input, InputNumber, Button, message } from "antd";
import React, { useState } from "react";
import { aiGenerateQuestionsUsingPost } from "@/api/questionController";

interface Props {
    visible: boolean;
    onCancel: () => void;
    onSuccess?: () => void; // 成功后要不要刷新列表
}

/**
 * AI 生成题目弹窗
 */
const AiGenerateModal: React.FC<Props> = ({ visible, onCancel, onSuccess }) => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    /**
     * 提交
     */
    const doSubmit = async (values: API.QuestionAIGenerateRequest) => {
        const hide = message.loading("正在操作");
        setLoading(true);
        try {
            await aiGenerateQuestionsUsingPost(values);
            hide();
            message.success("生成成功！");
            onCancel(); // 关掉弹窗
            onSuccess?.(); // 如果有刷新操作就执行
        } catch (error: any) {
            hide();
            message.error("生成失败，" + error.message);
        }
        setLoading(false);
    };

    return (
        <Modal
            title="AI 生成题目"
            open={visible}
            onCancel={onCancel}
            footer={null}
            destroyOnClose
        >
            <Form form={form} style={{ marginTop: 24 }} onFinish={doSubmit}>
                <Form.Item label="题目方向" name="questionType" rules={[{ required: true, message: '请输入题目方向' }]}>
                    <Input placeholder="比如 常识判断" />
                </Form.Item>
                <Form.Item label="题目数量" name="number" rules={[{ required: true, message: '请输入题目数量' }]}>
                    <InputNumber defaultValue={10} max={50} min={1} />
                </Form.Item>
                <Form.Item>
                    <Button
                        loading={loading}
                        style={{ width: 180 }}
                        type="primary"
                        htmlType="submit"
                    >
                        提交
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AiGenerateModal;
