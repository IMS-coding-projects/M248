import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "dark" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--secondary)",
          "--normal-text": "var(--primary)",
          "--normal-border": "var(--secondary)"
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
