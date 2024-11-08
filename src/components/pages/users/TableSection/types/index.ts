export interface RowData {
  userId: string;
  organizationName: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: "inactive" | "active" | "pending" | "blacklisted";
}
