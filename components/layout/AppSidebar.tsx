"use client"

import * as React from "react"
import {
    User,
    Briefcase,
    GraduationCap,
    Award,
    Wrench,
    FolderOpen,
    BookOpen,
} from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from "@/components/ui/sidebar"
import { cvData } from "@/lib/data"
import { useActiveSection } from "@/hooks/useActiveSection"

const sections = [
    { id: "hero", title: "Profil", icon: User },
    { id: "pengalaman", title: "Pengalaman", icon: Briefcase },
    { id: "pendidikan", title: "Pendidikan", icon: GraduationCap },
    { id: "pelatihan", title: "Pelatihan", icon: Award },
    { id: "keahlian", title: "Keahlian", icon: Wrench },
    { id: "proyek", title: "Proyek", icon: FolderOpen },
    { id: "publikasi", title: "Publikasi", icon: BookOpen },
];

const sectionIds = sections.map((s) => s.id);

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const activeSection = useActiveSection(sectionIds, 300);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 40,
                behavior: "smooth"
            });
        }
    };

    return (
        <Sidebar {...props} className="border-r-4 border-r-border bg-sidebar">
            <SidebarHeader>
                <div className="flex items-center gap-3 py-3 px-2">
                    <div className="flex aspect-square size-10 items-center justify-center bg-main text-main-foreground font-heading font-bold text-xl border-2 border-border brutal-shadow">
                        GK
                    </div>
                    <div className="flex flex-col overflow-hidden">
                        <span className="font-heading font-black truncate leading-tight mt-1">{cvData.profil.nama.split(" ").slice(0, 2).join(" ")}</span>
                        <span className="text-xs font-mono font-medium truncate opacity-70 mb-1">{cvData.profil.tagline}</span>
                    </div>
                </div>
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="font-bold text-xs uppercase tracking-wider mb-2 mt-4 px-2 opacity-60">
                        Menu Navigasi
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {sections.map((section) => {
                                const isActive = activeSection === section.id;
                                return (
                                    <SidebarMenuItem key={section.id}>
                                        <SidebarMenuButton
                                            isActive={isActive}
                                            onClick={() => scrollToSection(section.id)}
                                            tooltip={section.title}
                                            className={`
                                                w-full flex items-center h-10 px-2 py-2 gap-3
                                                transition-colors cursor-pointer border-2 border-transparent
                                                ${isActive ? 'bg-main text-main-foreground border-border brutal-shadow hover:bg-main hover:text-main-foreground' : 'hover:bg-accent hover:border-border hover:brutal-shadow'}
                                            `}
                                        >
                                            <section.icon className="h-5 w-5" />
                                            <span className="font-bold font-sans text-[15px]">{section.title}</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                )
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarRail />
        </Sidebar>
    )
}
