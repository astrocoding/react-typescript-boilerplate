import { useState } from 'react'
import {
  Badge,
  Button,
  Checkbox,
  Icon,
  Input,
  Radio,
  Separator,
  Skeleton,
  Switch,
  Tooltip,
  Typography,
  type BadgeStatus,
  type ButtonVariant,
} from '@/components/atoms'

type ShowcaseSectionProps = {
  title: string
  description: string
  children: React.ReactNode
}

const buttonVariants: ButtonVariant[] = [
  'primary',
  'ghost',
  'danger',
  'warning',
  'info',
]

const badgeStatuses: BadgeStatus[] = ['success', 'warning', 'error', 'info']

function ShowcaseSection({ title, description, children }: ShowcaseSectionProps) {
  return (
    <section className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 sm:p-6">
      <div className="mb-4 space-y-1">
        <Typography as="h2" weight="bold" color="white" className="text-xl">
          {title}
        </Typography>
        <Typography as="p" weight="light" color="muted" className="text-sm">
          {description}
        </Typography>
      </div>
      {children}
    </section>
  )
}

function App() {
  const [switchOn, setSwitchOn] = useState(true)
  const [selectedRole, setSelectedRole] = useState('frontend')
  const [checkedTerms, setCheckedTerms] = useState(false)

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-5 px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
      <header className="rounded-2xl border border-brand-300/20 bg-slate-900/80 p-5 sm:p-6">
        <Typography as="h1" weight="bold" color="white">
          Atoms Components Overview
        </Typography>
        <Typography as="p" color="muted" className="mt-2 max-w-3xl text-sm">
          Halaman ini menampilkan sample komponen atoms yang reusable dan
          independent, dikelompokkan per kategori supaya cepat dipreview.
        </Typography>
      </header>

      <div className="grid gap-5 lg:grid-cols-2">
        <ShowcaseSection
          title="Button"
          description="Semua variant, size, loading state, dan icon kiri/kanan."
        >
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {buttonVariants.map((variant) => (
                <Button
                  key={variant}
                  variant={variant}
                  icon={<Icon name="info" size="sm" />}
                >
                  {variant}
                </Button>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
              <Button
                variant="primary"
                isLoading
                icon={<Icon name="check" size="sm" />}
              >
                Saving
              </Button>
              <Button
                variant="ghost"
                icon={<Icon name="chevronDown" size="sm" />}
                iconPosition="right"
              >
                More
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {buttonVariants.map((variant) => (
                <Button key={`outline-${variant}`} variant={variant} appearance="outline">
                  outline {variant}
                </Button>
              ))}
            </div>
          </div>
        </ShowcaseSection>

        <ShowcaseSection
          title="Badge"
          description="Status badge dengan mode regular dan pill."
        >
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {badgeStatuses.map((status) => (
                <Badge key={status} status={status} icon={<Icon name="info" size="sm" />}>
                  {status}
                </Badge>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {badgeStatuses.map((status) => (
                <Badge key={`${status}-pill`} status={status} pill>
                  {status} pill
                </Badge>
              ))}
            </div>
          </div>
        </ShowcaseSection>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <ShowcaseSection
          title="Input"
          description="Input text, email, number, date, datetime-local, textarea, readonly, disabled, dan validasi 422 + tooltip."
        >
          <div className="grid gap-3">
            <Input label="Text" type="text" placeholder="Masukkan nama" />
            <Input label="Email" type="email" placeholder="you@company.com" />
            <Input label="Number" type="number" placeholder="0" />
            <Input label="Date" type="date" />
            <Input label="Datetime" type="datetime-local" />
            <Input
              label="Textarea"
              type="textarea"
              rows={3}
              placeholder="Tulis catatan..."
            />
            <Input
              label="Readonly Field"
              type="text"
              value="Readonly value"
              isReadOnly
            />
            <Input
              label="Disabled Field"
              type="text"
              placeholder="Tidak bisa diubah"
              isDisabled
            />
            <Input
              label="Validation 422"
              type="email"
              placeholder="bad-format"
              isError
              errorCode={422}
              errorMessage="Email format tidak valid untuk request ini."
            />
          </div>
        </ShowcaseSection>

        <ShowcaseSection
          title="Selection Controls"
          description="Checkbox, radio, dan switch untuk form state."
        >
          <div className="space-y-4">
            <Checkbox
              label="Setujui syarat dan ketentuan"
              checked={checkedTerms}
              onChange={(event) => setCheckedTerms(event.target.checked)}
              helperText="Ini contoh controlled checkbox."
            />

            <div className="space-y-2">
              <Radio
                name="role"
                label="Frontend"
                value="frontend"
                checked={selectedRole === 'frontend'}
                onChange={(event) => setSelectedRole(event.target.value)}
              />
              <Radio
                name="role"
                label="Backend"
                value="backend"
                checked={selectedRole === 'backend'}
                onChange={(event) => setSelectedRole(event.target.value)}
              />
            </div>

            <Switch
              label="Aktifkan notifikasi"
              checked={switchOn}
              onCheckedChange={setSwitchOn}
              helperText={switchOn ? 'Status: aktif' : 'Status: nonaktif'}
            />
          </div>
        </ShowcaseSection>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <ShowcaseSection
          title="Typography"
          description="Sample tag `h1/h2/p/span`, weight, dan variasi color."
        >
          <div className="space-y-2">
            <Typography as="h1" weight="bold" color="white">
              Heading H1 Bold
            </Typography>
            <Typography as="h2" weight="medium" color="primary">
              Heading H2 Medium Primary
            </Typography>
            <Typography as="p" weight="light" color="muted">
              Paragraph light muted untuk deskripsi sekunder.
            </Typography>
            <Typography as="span" weight="bold" color="success">
              Inline span success
            </Typography>
          </div>
        </ShowcaseSection>

        <ShowcaseSection
          title="Feedback & Utilities"
          description="Tooltip, separator, icon, dan skeleton loading state."
        >
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <Tooltip content="Ini tooltip default (top).">
                <Button variant="info" size="sm">
                  Hover tooltip
                </Button>
              </Tooltip>
              <Icon name="check" className="text-emerald-300" />
              <Icon name="warning" className="text-amber-300" />
              <Icon name="close" className="text-red-300" />
            </div>

            <Separator />

            <div className="flex items-center gap-4">
              <div className="h-12">
                <Separator orientation="vertical" />
              </div>
              <Typography as="span" color="muted">
                Vertical separator sample
              </Typography>
            </div>

            <div className="space-y-2">
              <Skeleton width="full" height="sm" />
              <Skeleton width="lg" height="md" />
              <Skeleton width="sm" shape="circle" />
            </div>
          </div>
        </ShowcaseSection>
      </div>
    </main>
  )
}

export default App
