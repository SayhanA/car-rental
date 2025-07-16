import {
  FaEnvelope,
  FaExternalLinkAlt,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { FiMessageSquare, FiPhoneCall } from "react-icons/fi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Button from "../atoms/Button";
import Text from "../atoms/Text";
import TextXL from "../atoms/TextXL";

export default function OwnerDetails() {
  return (
    <div className="mx-auto p-4">
      <TextXL className="text-text-dark font-semibold">
        Car Owner Details
      </TextXL>

      <div className="my-3 flex flex-col gap-3">
        <table>
          <tbody>
            <tr>
              <td className="flex items-center gap-2 py-2">
                <HiOutlineBuildingOffice2
                  className="text-text-lite mt-1"
                  size={18}
                />
                <Text>Agence</Text>
              </td>
              <td>
                <div>
                  <p className="text-text-lite flex items-center gap-1 text-sm font-medium">
                    <img
                      src="data:image/png;base64,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"
                      alt="Junot Paris"
                      className="h-10 w-10 rounded-sm"
                    />
                    <Link
                      href="#"
                      className="flex items-center gap-1 text-blue-600 hover:underline"
                    >
                      Junot Paris <FaExternalLinkAlt size={12} />
                    </Link>
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td className="flex items-center gap-2 py-2">
                <FaPhoneAlt className="text-gray-600" size={16} />
                <Text>Telephone</Text>
              </td>
              <td>
                <Text>+8801782132001</Text>
              </td>
            </tr>
            <tr>
              <td className="flex items-center gap-2 py-2">
                <FaEnvelope className="text-gray-600" size={16} />
                <Text>Email</Text>
              </td>
              <td>
                <Text>contact@junot.fr</Text>
              </td>
            </tr>
            <tr>
              <td className="flex items-center gap-2 py-2">
                <FaMapMarkerAlt className="text-gray-600" size={16} />
                <Text>Address</Text>
              </td>
              <td>
                <Text className="text-sm text-gray-800">
                  Rendez-vous au métro Parmentier, Paris 11
                </Text>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr className="border-border mb-4 border" />

      {/* Contact Person */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Jubéo Hernandez"
            className="h-12 w-12 rounded-full"
          />
          <Text className="font-medium text-purple-600">Jubéo Hernandez</Text>
        </div>
        <div className="flex gap-2">
          <Button className="bg-border flex items-center gap-1 rounded border px-3 py-1 text-sm hover:text-white">
            <FiMessageSquare size={16} /> Message
          </Button>
          <Button className="bg-border flex items-center gap-1 rounded border px-3 py-1 text-sm hover:text-white">
            <FiPhoneCall size={16} /> Call
          </Button>
        </div>
      </div>
    </div>
  );
}
