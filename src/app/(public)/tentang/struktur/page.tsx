import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import {
  User,
  Award,
  Users,
  FileText,
  ShieldCheck,
  Activity,
} from "lucide-react";

type Person = { title: string; name: string; icon?: any };

export default function OrganizationStructure() {
  const top: Person = { title: "Pembina", name: "Tidak diketahui", icon: Award };
  const executives: Person[] = [
    { title: "Ketua", name: "Tidak diketahui", icon: User },
    { title: "Wakil Ketua", name: "Tidak diketahui", icon: Users },
  ];
  const officers: Person[] = [
    { title: "Sekretaris", name: "Tidak diketahui", icon: FileText },
    { title: "Bendahara", name: "Tidak diketahui", icon: ShieldCheck },
  ];
  const seksi = [
    { title: "Seksi Kegiatan", icon: Activity },
    { title: "Seksi Sosial", icon: Users },
    { title: "Seksi Olahraga", icon: Activity },
    { title: "Seksi Humas & Publikasi", icon: User },
    { title: "Seksi Keamanan", icon: ShieldCheck },
  ];

  return (
    <div className="py-12 px-4 md:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-3xl text-gray-900 font-bold mb-10">
          Struktur Organisasi
        </h2>

        {/* Top (Pembina) */}
        <div className="flex justify-center">
          <div className="relative">
            <Card className="w-72 bg-card text-center border-2 border-gray-300 shadow">
              <CardHeader>
                <CardTitle className="flex items-center justify-center gap-2">
                  {top.icon && <top.icon className="w-5 h-5" />}
                  <span className="text-lg text-gray-800">{top.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">{top.name}</CardContent>
            </Card>

            {/* vertical connector from top to executives */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-full h-8 w-px bg-gray-300" />
          </div>
        </div>

        {/* Executives row */}
        <div className="mt-8 relative">
          {/* horizontal connector between two executives (only visible if two items) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-6 w-64 h-px bg-gray-300" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
            {executives.map((p, i) => (
              <div key={i} className="flex flex-col items-center">
                {/* vertical connector from executives up to top (on small screens, connectors stack) */}
                <div className="hidden md:block mb-2 h-6 w-px bg-gray-300" />
                <Card className="w-full bg-card border-2 border-gray-300 max-w-xs text-center shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-center gap-2">
                      {p.icon && <p.icon className="w-5 h-5" />}
                      <span className="text-lg text-gray-800">{p.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">{p.name}</CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* vertical connector from executives to officers */}
          <div className="flex justify-center">
            <div className="w-px h-8 bg-gray-300 mt-6" />
          </div>
        </div>

        {/* Officers row */}
        <div className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
            {officers.map((p, i) => (
              <div key={i} className="relative">
                <Card className="w-72 bg-card border-2 border-gray-300 text-center shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-center gap-2">
                      {p.icon && <p.icon className="w-5 h-5" />}
                      <span className="text-lg text-gray-800">{p.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">{p.name}</CardContent>
                </Card>

                {/* connector from officer to seksi (vertical) */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-full h-8 w-px bg-gray-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Seksi section with connector line */}
        <div className="mt-10">
          {/* horizontal connector line */}
          <div className="flex justify-center">
            <div className="w-3/4 h-px bg-gray-300" />
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {seksi.map((s, i) => (
              <Card key={i} className="flex bg-white/50 border-2 border-gray-300 items-center gap-4 p-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  {s.icon && <s.icon className="w-5 h-5 text-gray-700" />}
                </div>
                <div>
                  <div className="font-semibold text-gray-800">{s.title}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
