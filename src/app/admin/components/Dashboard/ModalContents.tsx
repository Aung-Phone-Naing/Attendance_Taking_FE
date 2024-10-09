import {ModalWrapper} from "@/app/admin/components/Dashboard/styled";
import {Table} from "@/app/admin/components/Table/styled";

interface ModalContentsProps {
    inModal: boolean
}

const data = [
    {
        name: "abc",
        checkout: "09 Oct 2024 00:00",
        reason: "medical"
    },
    {
        name: "abcd",
        checkout: "09 Oct 2024 01:00",
        reason: "work"
    },
    {
        name: "abcde",
        checkout: "09 Oct 2024 10:00",
        reason: "report sick"
    }
]

export default function ModalContents({inModal}: ModalContentsProps) {
    return (
        <ModalWrapper>
            <Table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>{inModal ? "Check In Time" : "Check Out Time"}</th>
                    {!inModal && <th>Reason</th>}
                </tr>
                </thead>
                <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        <td>{row.name}</td>
                        <td>{row.checkout}</td>
                        {!inModal && <td>{row.reason}</td>}
                    </tr>
                ))}
                </tbody>
            </Table>
        </ModalWrapper>
    )
}