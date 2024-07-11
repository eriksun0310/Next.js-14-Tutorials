import Card from "@/components/card";
import Link from "next/link";
import React from "react";

const NotificationsPage = () => {
  return (
    <Card>
      <div>Notifications Page</div>
      <Link href="/complex-dashboard/archived">Archived</Link>
    </Card>
  );
};

export default NotificationsPage;
