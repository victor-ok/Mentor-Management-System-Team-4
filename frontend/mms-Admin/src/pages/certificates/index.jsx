import CertificateList from "./CertificateList";
import ViewCertificate from "./ViewCertificate";

export default {
    path: "certificates",
    children:[
        {
            index: true,
            element: <CertificateList />
        },
        {
            path: ":id/view",
            element: <ViewCertificate />
        }
    ]
}