"use client";

import {
  Row,
  Col,
  Typography,
  Button,
  Card,
  Space,
  Form,
  Input,
  Avatar,
  Tag,
} from "antd";
import {
  RocketOutlined,
  SafetyOutlined,
  BulbOutlined,
  BarChartOutlined,
  LinkOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { Section, Animation } from "@/components";

const { Title, Paragraph, Text } = Typography;

export default function Home() {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const onFinish = (values: {
    name: string;
    email: string;
    message: string;
  }) => {
    console.log("Form values:", values);
    // Handle form submission
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section - MAXIUS Style */}
      <Section
        id="hero"
        className="snap-section bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
        {/* Background Elements - Abstract Geometric */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 flex flex-col justify-center items-center h-full">
          <Animation direction="up" delay={0.1} repeat={true}>
            <Tag
              color="orange"
              className="px-6 py-3 text-base border-0 mb-8 text-white !bg-orange-500/20 !backdrop-blur-md !border !border-orange-500/30">
              <CheckCircleOutlined className="mr-2" />
              {t("hero.tag")}
            </Tag>
          </Animation>

          <Animation direction="up" delay={0.2} repeat={true}>
            <Title
              level={1}
              className="!text-6xl md:!text-8xl lg:!text-9xl !mb-8 !leading-tight text-white font-bold">
              {t("hero.title")}
            </Title>
          </Animation>

          <Animation direction="up" delay={0.3} repeat={true}>
            <Title
              level={2}
              className="!text-3xl md:!text-4xl lg:!text-5xl !mb-8 !leading-tight text-blue-300 font-light">
              {t("hero.subtitle")}
            </Title>
          </Animation>

          <Animation direction="up" delay={0.4} repeat={true}>
            <Paragraph className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-16 max-w-5xl mx-auto leading-relaxed font-light">
              {t("hero.description")}
            </Paragraph>
          </Animation>

          <Animation direction="up" delay={0.5} repeat={true}>
            <Space size="large" className="!mb-4">
              <Button
                type="primary"
                size="large"
                href="#contact"
                className="!px-12 !py-5 !text-xl !h-auto !shadow-2xl hover:!shadow-3xl transform hover:-translate-y-1 transition-all duration-300 !bg-gradient-to-r !from-orange-500 !to-orange-600 !border-none !rounded-lg">
                {t("hero.cta.primary")}
              </Button>
              <Button
                size="large"
                href="#features"
                className="!px-12 !py-5 !text-xl !h-auto !border-2 hover:!bg-orange-50 transform hover:-translate-y-1 transition-all duration-300 !border-orange-500 !text-orange-500 !bg-transparent !rounded-lg">
                {t("hero.cta.secondary")}
              </Button>
            </Space>
          </Animation>

          <Animation direction="up" delay={0.6} repeat={true}>
            <Row gutter={[32, 16]} justify="center" className="text-gray-400">
              <Col>
                <Space>
                  <Avatar size="small" className="!bg-green-500">
                    <CheckCircleOutlined />
                  </Avatar>
                  <Text className="text-white">
                    {t("hero.features.freeTrial")}
                  </Text>
                </Space>
              </Col>
              <Col>
                <Space>
                  <Avatar size="small" className="!bg-blue-500">
                    <RocketOutlined />
                  </Avatar>
                  <Text className="text-white">
                    {t("hero.features.quickDeploy")}
                  </Text>
                </Space>
              </Col>
              <Col>
                <Space>
                  <Avatar size="small" className="!bg-purple-500">
                    <SafetyOutlined />
                  </Avatar>
                  <Text className="text-white">
                    {t("hero.features.highSecurity")}
                  </Text>
                </Space>
              </Col>
            </Row>
          </Animation>
        </div>
      </Section>

      {/* About Section - MAXIUS Style */}
      <Section id="about" className="snap-section bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 h-full flex flex-col justify-center">
          <Row justify="center" className="mb-16">
            <Col xs={24} lg={16} className="text-center">
              <Animation direction="up" repeat={true}>
                <Tag
                  color="orange"
                  className="px-4 py-2 text-sm mb-8 !bg-orange-100 !border !border-orange-300 !text-orange-700">
                  <CheckCircleOutlined className="mr-2" />
                  {t("about.tag")}
                </Tag>
                <Title
                  level={2}
                  className="!text-5xl md:!text-6xl !mb-8 !text-gray-900 font-bold">
                  {t("about.title")}
                </Title>
                <Paragraph className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  {t("about.description")}
                </Paragraph>
              </Animation>
            </Col>
          </Row>

          <Row
            gutter={[32, 32]}
            justify="center"
            className="flex-1 items-stretch">
            {[
              {
                icon: <RocketOutlined className="text-4xl" />,
                title: t("about.features.speed.title"),
                description: t("about.features.speed.description"),
                color: "#ff4d4f",
                bgColor: "#fff1f0",
                borderColor: "#ffccc7",
              },
              {
                icon: <SafetyOutlined className="text-4xl" />,
                title: t("about.features.security.title"),
                description: t("about.features.security.description"),
                color: "#1890ff",
                bgColor: "#f0f9ff",
                borderColor: "#bae7ff",
              },
              {
                icon: <BulbOutlined className="text-4xl" />,
                title: t("about.features.innovation.title"),
                description: t("about.features.innovation.description"),
                color: "#faad14",
                bgColor: "#fffbe6",
                borderColor: "#ffe58f",
              },
            ].map((feature, index) => (
              <Col xs={24} sm={12} lg={8} key={feature.title} className="flex">
                <Animation direction="up" delay={index * 0.1} repeat={true}>
                  <Card
                    className="text-center w-full h-full border-2 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 flex flex-col !rounded-2xl !min-h-[350px]"
                    style={{
                      backgroundColor: feature.bgColor,
                      borderColor: feature.borderColor,
                    }}
                    bodyStyle={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      padding: "24px 20px",
                    }}>
                    <div className="flex-1 flex flex-col justify-center">
                      <Avatar
                        size={80}
                        className="!mx-auto !mb-6"
                        style={{
                          backgroundColor: feature.color,
                        }}
                        icon={feature.icon}
                      />
                      <Title
                        level={3}
                        className="!text-2xl md:!text-3xl !mb-4 md:!mb-6 !text-gray-900">
                        {feature.title}
                      </Title>
                      <Paragraph className="text-gray-600 leading-relaxed text-base md:text-lg flex-1">
                        {feature.description}
                      </Paragraph>
                    </div>
                  </Card>
                </Animation>
              </Col>
            ))}
          </Row>
        </div>
      </Section>

      {/* Features Section - MAXIUS Style */}
      <Section
        id="features"
        className="snap-section bg-gradient-to-br from-gray-50 to-blue-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 h-full flex flex-col justify-center">
          <Row justify="center" className="mb-12 md:mb-16">
            <Col xs={24} sm={24} lg={20} xl={18} className="text-center">
              <Animation direction="up" repeat={true}>
                <Tag
                  color="orange"
                  className="px-3 py-1 md:px-4 md:py-2 text-xs md:text-sm mb-6 md:mb-8 !bg-orange-100 !border !border-orange-300 !text-orange-700">
                  <CheckCircleOutlined className="mr-1 md:mr-2" />
                  {t("features.tag")}
                </Tag>
                <div className="!min-w-0 !overflow-hidden">
                  <Title
                    level={2}
                    className="!text-4xl sm:!text-5xl md:!text-6xl !mb-8 !text-gray-900 font-bold !leading-tight">
                    {t("features.title")}
                  </Title>
                </div>
                <Paragraph className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
                  {t("features.description")}
                </Paragraph>
              </Animation>
            </Col>
          </Row>

          <Row
            gutter={[24, 32]}
            justify="center"
            className="flex-1 items-center">
            {[
              {
                title: t("features.items.projectManagement.title"),
                description: t("features.items.projectManagement.description"),
                features: t("features.items.projectManagement.features", {
                  returnObjects: true,
                }) as string[],
                icon: <BarChartOutlined className="text-5xl" />,
                color: "linear-gradient(135deg, #1890ff 0%, #722ed1 100%)",
              },
              {
                title: t("features.items.integration.title"),
                description: t("features.items.integration.description"),
                features: t("features.items.integration.features", {
                  returnObjects: true,
                }) as string[],
                icon: <LinkOutlined className="text-5xl" />,
                color: "linear-gradient(135deg, #722ed1 0%, #eb2f96 100%)",
              },
            ].map((feature, index) => (
              <Col xs={24} sm={24} md={12} lg={12} key={feature.title}>
                <Animation
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={index * 0.2}
                  repeat={true}>
                  <Card className="h-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-3 !border !border-gray-200 !rounded-[20px] !bg-white !p-6 md:!p-8">
                    <Avatar
                      size={80}
                      className="!mb-6 md:!mb-8 !flex !items-center !justify-center"
                      style={{
                        background: feature.color,
                      }}
                      icon={feature.icon}
                    />
                    <Title
                      level={3}
                      className="!text-2xl sm:!text-3xl md:!text-4xl !mb-6 md:!mb-8 !text-gray-900">
                      {feature.title}
                    </Title>
                    <Paragraph className="text-base md:text-lg text-gray-600 mb-8 md:mb-10 leading-relaxed">
                      {feature.description}
                    </Paragraph>
                    <Space
                      direction="vertical"
                      size="middle"
                      className="w-full">
                      {feature.features.map((item, itemIndex) => (
                        <Space key={itemIndex} className="w-full">
                          <Avatar
                            size="small"
                            className="!bg-green-500"
                            icon={<CheckCircleOutlined />}
                          />
                          <Text className="text-base md:text-lg text-gray-700">
                            {item}
                          </Text>
                        </Space>
                      ))}
                    </Space>
                  </Card>
                </Animation>
              </Col>
            ))}
          </Row>
        </div>
      </Section>

      {/* Contact Section - MAXIUS Style */}
      <Section id="contact" className="snap-section bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 h-full flex flex-col justify-center">
          <Row justify="center" className="mb-16">
            <Col xs={24} lg={16} className="text-center">
              <Animation direction="up" repeat={true}>
                <Tag
                  color="orange"
                  className="px-4 py-2 text-sm mb-8 !bg-orange-100 !border !border-orange-300 !text-orange-700">
                  <CheckCircleOutlined className="mr-2" />
                  {t("contact.tag")}
                </Tag>
                <Title
                  level={2}
                  className="!text-5xl md:!text-6xl !mb-8 !text-gray-900 font-bold">
                  {t("contact.title")}
                </Title>
                <Paragraph className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  {t("contact.description")}
                </Paragraph>
              </Animation>
            </Col>
          </Row>

          <Row
            gutter={[64, 48]}
            justify="center"
            className="flex-1 items-center">
            {/* Contact Info */}
            <Col xs={24} lg={12}>
              <Animation direction="left" delay={0.2} repeat={true}>
                <Card className="h-full border-0 shadow-none">
                  <Title level={3} className="!text-3xl !mb-8 !text-gray-900">
                    {t("contact.info.title")}
                  </Title>
                  <Paragraph className="text-gray-600 leading-relaxed mb-10 text-lg">
                    {t("contact.info.description")}
                  </Paragraph>

                  <Space direction="vertical" size="large" className="w-full">
                    <Space size="large">
                      <Avatar
                        size={56}
                        className="!bg-blue-500"
                        icon={<MailOutlined />}
                      />
                      <div>
                        <Text strong className="block text-lg text-gray-900">
                          {t("contact.info.email")}
                        </Text>
                        <Text className="text-gray-600 text-base">
                          contact@maxius.io
                        </Text>
                      </div>
                    </Space>

                    <Space size="large">
                      <Avatar
                        size={56}
                        className="!bg-green-500"
                        icon={<PhoneOutlined />}
                      />
                      <div>
                        <Text strong className="block text-lg text-gray-900">
                          {t("contact.info.phone")}
                        </Text>
                        <Text className="text-gray-600 text-base">
                          +84 123 456 789
                        </Text>
                      </div>
                    </Space>

                    <Space size="large">
                      <Avatar
                        size={56}
                        className="!bg-yellow-500"
                        icon={<EnvironmentOutlined />}
                      />
                      <div>
                        <Text strong className="block text-lg text-gray-900">
                          {t("contact.info.address")}
                        </Text>
                        <Text className="text-gray-600 text-base">
                          Hà Nội, Việt Nam
                        </Text>
                      </div>
                    </Space>
                  </Space>
                </Card>
              </Animation>
            </Col>

            {/* Contact Form */}
            <Col xs={24} lg={12}>
              <Animation direction="right" delay={0.3} repeat={true}>
                <Card className="h-full shadow-2xl border border-gray-100 !rounded-[20px]">
                  <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    size="large">
                    <Row gutter={20}>
                      <Col xs={24} md={12}>
                        <Form.Item
                          name="name"
                          label={t("contact.form.name")}
                          rules={[
                            {
                              required: true,
                              message: t(
                                "contact.form.validation.nameRequired"
                              ),
                            },
                          ]}>
                          <Input
                            placeholder={t("contact.form.namePlaceholder")}
                            className="rounded-lg !h-12"
                          />
                        </Form.Item>
                      </Col>
                      <Col xs={24} md={12}>
                        <Form.Item
                          name="email"
                          label={t("contact.form.email")}
                          rules={[
                            {
                              required: true,
                              message: t(
                                "contact.form.validation.emailRequired"
                              ),
                            },
                            {
                              type: "email",
                              message: t(
                                "contact.form.validation.emailInvalid"
                              ),
                            },
                          ]}>
                          <Input
                            placeholder={t("contact.form.emailPlaceholder")}
                            className="rounded-lg !h-12"
                          />
                        </Form.Item>
                      </Col>
                    </Row>

                    <Form.Item
                      name="message"
                      label={t("contact.form.message")}
                      rules={[
                        {
                          required: true,
                          message: t("contact.form.validation.messageRequired"),
                        },
                      ]}>
                      <Input.TextArea
                        rows={5}
                        placeholder={t("contact.form.messagePlaceholder")}
                        className="rounded-lg resize-none"
                      />
                    </Form.Item>

                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        size="large"
                        className="w-full !h-14 !text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 !bg-gradient-to-r !from-orange-500 !to-orange-600 !border-none !rounded-xl">
                        {t("contact.form.submit")}
                      </Button>
                    </Form.Item>
                  </Form>
                </Card>
              </Animation>
            </Col>
          </Row>
        </div>
      </Section>
    </main>
  );
}
