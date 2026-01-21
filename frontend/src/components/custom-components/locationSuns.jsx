import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { MapPin,SunriseIcon,SunsetIcon } from "lucide-react";

const LocationSuns = () => {
    return (
        <div>
            <Table>
                <TableCaption>Locations and sunset and sunrise times.</TableCaption>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <div className="flex items-center gap-2">
                                <MapPin color="#fbcb9c" /> <span className="text-xl text-[#5a91ff]">Kabul</span>
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="flex items-center gap-2 ml-10">
                                <SunriseIcon color="#fbcb9c" /> <span className="text-xl text-[#b5b5b6]">4:20 AM</span>
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="flex items-center gap-2 ml-15">
                                <SunsetIcon color="#fbcb9c" /> <span className="text-xl text-[#b5b5b6]">6:31 PM</span>
                            </div>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}

export default LocationSuns;