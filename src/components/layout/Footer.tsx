"use client";

import { motion } from "framer-motion";
import { Row, Col, Typography, Divider } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  GithubOutlined,
  FacebookOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { COMPANY_INFO, FOOTER_LINKS } from "@/constants";

const { Title, Paragraph, Text } = Typography;

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { name: "Twitter", href: "#", icon: <TwitterOutlined />, color: "#1DA1F2" },
    {
      name: "LinkedIn",
      href: "#",
      icon: <LinkedinOutlined />,
      color: "#0077B5",
    },
    { name: "GitHub", href: "#", icon: <GithubOutlined />, color: "#333" },
    {
      name: "Facebook",
      href: "#",
      icon: <FacebookOutlined />,
      color: "#1877F2",
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="footer"
      className="snap-section bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden !min-h-screen !snap-start !snap-always !pt-24 !box-border"
      role="contentinfo"
      aria-label="Thông tin liên hệ và footer của MAXIUS">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900/80 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        {/* Main Content - Improved Layout */}
        <Row gutter={[48, 48]} className="flex-1 items-start pt-8">
          {/* Company Info & Contact - Left Column */}
          <Col xs={24} lg={14}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-10">
              {/* Logo Section */}
              <div className="space-y-6">
                <Link
                  href="#hero"
                  className="group inline-block"
                  aria-label="MAXIUS - Về trang chủ">
                  <div className="relative">
                    <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent group-hover:from-orange-300 group-hover:via-orange-400 group-hover:to-orange-500 transition-all duration-500">
                      MAXIUS
                    </span>
                    {/* Logo glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500" />
                  </div>
                </Link>

                <Paragraph className="text-gray-300 text-base md:text-lg leading-relaxed max-w-lg">
                  {t("footer.description")}
                </Paragraph>
              </div>

              {/* Contact Info - Improved Layout with Better Spacing */}
              <div className="space-y-6 !mb-5">
                <Title level={4} className="text-white mb-6 flex items-center">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 mr-3"></div>
                  {t("footer.contactInfo")}
                </Title>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                    whileHover={{ x: 5, y: -2 }}>
                    <div className="flex items-start space-x-4 !p-2">
                      <div className="flex-shrink-0 w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center !mr-2">
                        <EnvironmentOutlined
                          className="text-orange-400 text-xl"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <Text className="text-gray-300 block font-medium text-sm mb-2">
                          {t("contact.info.address")}
                        </Text>
                        <Text className="text-gray-300 block text-sm leading-relaxed">
                          {COMPANY_INFO.address}
                        </Text>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                    whileHover={{ x: 5, y: -2 }}>
                    <div className="flex items-start space-x-4 !p-2">
                      <div className="flex-shrink-0 w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center !mr-2">
                        <PhoneOutlined
                          className="text-orange-400 text-xl"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <Text className="text-gray-300 block font-medium text-sm mb-2">
                          {t("contact.info.phone")}
                        </Text>
                        <a
                          href={`tel:${COMPANY_INFO.phone}`}
                          className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-sm block leading-relaxed"
                          aria-label={`${t("contact.info.phone")}: ${
                            COMPANY_INFO.phone
                          }`}>
                          Tel {COMPANY_INFO.phone}
                        </a>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                    whileHover={{ x: 5, y: -2 }}>
                    <div className="flex items-start space-x-4 !p-2">
                      <div className="flex-shrink-0 w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center !mr-2">
                        <PhoneOutlined
                          className="text-orange-400 text-xl"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <Text className="text-gray-300 block font-medium text-sm mb-2">
                          {t("contact.info.fax")}
                        </Text>
                        <a
                          href={`tel:${COMPANY_INFO.fax}`}
                          className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-sm block leading-relaxed"
                          aria-label={`${t("contact.info.fax")}: ${
                            COMPANY_INFO.fax
                          }`}>
                          Fax {COMPANY_INFO.fax}
                        </a>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                    whileHover={{ x: 5, y: -2 }}>
                    <div className="flex items-start space-x-4 !p-2">
                      <div className="flex-shrink-0 w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center !mr-2">
                        <MailOutlined
                          className="text-orange-400 text-xl"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <Text className="text-gray-300 block font-medium text-sm mb-2">
                          {t("contact.info.email")}
                        </Text>
                        <a
                          href={`mailto:${COMPANY_INFO.email}`}
                          className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-sm block leading-relaxed"
                          aria-label={`${t("contact.info.email")}: ${
                            COMPANY_INFO.email
                          }`}>
                          {COMPANY_INFO.email}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Social Links - Improved Spacing */}
              <div className="space-y-4">
                <Title level={5} className="text-white mb-4 flex items-center">
                  <div className="w-6 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 mr-3"></div>
                  {t("footer.followUs")}
                </Title>
                <div className="flex space-x-5">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:bg-orange-500 hover:border-orange-400 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-orange-500/25 !mr-2"
                      aria-label={`${social.name} của MAXIUS`}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}>
                      <span className="text-xl">{social.icon}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </Col>

          {/* Map - Right Column */}
          <Col xs={24} lg={10}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl border border-white/20 !mt-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.1234567890123!2d126.95123456789012!3d37.40123456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b7c2b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sMAXIUS!5e0!3m2!1sen!2skr!4v1234567890123"
                width="100%"
                height="100%"
                className="!border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vị trí văn phòng MAXIUS"
                aria-label="Bản đồ Google Maps hiển thị vị trí văn phòng MAXIUS tại Anyang-si, Gyeonggi-do, Republic of Korea"
              />
            </motion.div>
          </Col>
        </Row>

        <Divider className="border-gray-700/50 my-12" />

        {/* Footer Links & Copyright - Improved Layout */}
        <Row gutter={[32, 24]} className="mt-8">
          {FOOTER_LINKS.map((section, index) => (
            <Col key={section.title} xs={24} sm={12} md={8}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}>
                <Title level={5} className="text-white mb-6 flex items-center">
                  <div className="w-4 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 mr-3"></div>
                  {t(`footer.links.${section.key.toLowerCase()}`)}
                </Title>
                <nav
                  aria-label={`Liên kết ${t(
                    `footer.links.${section.key.toLowerCase()}`
                  ).toLowerCase()}`}>
                  <ul className="space-y-3">
                    {section.items.map((item) => (
                      <li key={item.label}>
                        <button
                          onClick={() => scrollToSection(item.href)}
                          className="text-gray-300 hover:text-orange-400 transition-all duration-300 text-left w-full group flex items-center py-2 px-3 rounded-lg hover:bg-white/5"
                          aria-label={`Điều hướng đến ${item.label}`}>
                          <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-150" />
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Bottom Footer - Improved Spacing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 mt-12 pt-8 border-t border-gray-700/50">
          <Text className="text-gray-400 flex items-center text-sm">
            © {new Date().getFullYear()} {COMPANY_INFO.name}.{" "}
            {t("footer.copyright")}
            <HeartOutlined className="text-red-400 mx-2 animate-pulse" />
          </Text>
          <div className="w-[280px] flex justify-between space-x-8">
            <a
              href="/privacy"
              className="text-gray-400 hover:text-orange-400 transition-colors duration-200 hover:underline text-sm px-3 py-2 rounded-lg hover:bg-white/5"
              aria-label={t("footer.legal.privacy")}>
              {t("footer.legal.privacy")}
            </a>
            <a
              href="/terms"
              className="text-gray-400 hover:text-orange-400 transition-colors duration-200 hover:underline text-sm px-3 py-2 rounded-lg hover:bg-white/5"
              aria-label={t("footer.legal.terms")}>
              {t("footer.legal.terms")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Footer;
