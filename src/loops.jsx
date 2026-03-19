import './styles.css'

const contributors = [
  {
    avatarUrl: "https://i.pravatar.cc/150?img=1",
    handle: "@alpha_dev",
    href: "/profile/alpha_dev"
  },
  {
    avatarUrl: "https://i.pravatar.cc/150?img=2",
    handle: "@code_ninja",
    href: "/profile/code_ninja"
  },
  {
    avatarUrl: "https://i.pravatar.cc/150?img=3",
    handle: "@bug_hunter",
    href: "/profile/bug_hunter"
  },
  {
    avatarUrl: "https://i.pravatar.cc/150?img=4",
    handle: "@ui_wizard",
    href: "/profile/ui_wizard"
  },
  {
    avatarUrl: "https://i.pravatar.cc/150?img=5",
    handle: "@ml_guru",
    href: "/profile/ml_guru"
  }
];

export const Loop = () => {
    return (
        <div>
            <div class="flex items-center space-x-2 text-base">
                <h4 class="font-semibold text-slate-900">Contributors</h4>
                <span class="bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700 ...">204</span>
            </div>
            <div class="mt-3 flex -space-x-2 overflow-hidden">
                {#each contributors as user}
                <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src={user.avatarUrl} alt={user.handle} />
                {/each}
            </div>
            <div class="mt-3 text-sm font-medium">
                <a href="#" class="text-blue-500">+ 198 others</a>
            </div>
        </div>
    )
}