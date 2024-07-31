/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "https://envogue-pied.vercel.app/",
    NEXTAUTH_URL: "https://envogue-pied.vercel.app/",
    DB_LOCAL_URI: "mongodb+srv://cutie:anu@cluster0.dw16w1d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    DB_URI: "mongodb+srv://cutie:anu@cluster0.dw16w1d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",

    STRIPE_WEBHOOK_SECRET: "whsec_UxYkxDhAxQ2q0mMFM6yEWFl8wikW1Xaq",

    STRIPE_SECRET_KEY: "sk_test_51P7yDHSDgMkDPc6ssyOTmix7UnHitMxMML4u6c1yN04ZgXxEQVZOy1Y0fiENZXSKBky1Cuz7T8KF3cx9sm4ixlCd00YZtjuOvN",

    CLOUDINARY_CLOUD_NAME: "dt0xgxohw",
    CLOUDINARY_API_KEY: "814853432562843",
    CLOUDINARY_API_SECRET: "_6gSaARLQBo8b5Tb_gsrHIv6mFw",

    NEXTAUTH_SECRET: "KSDFJKLSDJFLKSDFJSLDKF934KJLDJGDLKGFJDF",
    REVALIDATE_TOKEN: "JK34J50JSDKFLJSDKF034I5DKFJSDK4IJFKSDJFL",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
