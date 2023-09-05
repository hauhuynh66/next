"use client"

import { Navbar, Stack, Tooltip, UnstyledButton, createStyles, rem } from '@mantine/core';
import {
  IconGauge,
  IconHome2,
  IconNote,
  IconSettings
} from '@tabler/icons-react';

import Link from 'next/link';
import { useState } from 'react';

const useStyles = createStyles((theme) => ({
  link: {
    width: '100%',
    height: rem(50),
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    },
  },

  active: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

interface NavbarLinkProps {
  icon: React.FC<any>;
  label: string;
  route?: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, route, active, onClick }: NavbarLinkProps) {
  const { classes, cx } = useStyles();
  return (
    <Link href={route||""}>
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }} ml={10}>
      <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
        <Icon size="1.2rem" stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
    </Link>
  );
}

const routes = [
  { icon: IconHome2, label: 'Home' , route: "/"},
  { icon: IconGauge, label: 'Dashboard' , route: "/dashboard"},
  { icon: IconNote, label: 'Notes', route : "/notes" },
];

export function AppSideBar() {
  const [active, setActive] = useState(0);

  return (
    <Navbar height={"full"} width={{ base: 80 }} px={5}>
      <Navbar.Section grow mt={50}>
        <Stack justify="center" spacing={0}>
          {
            routes.map((link, index) => (
              <NavbarLink
                {...link}
                key={link.label}
                active={index === active}
                onClick={() => setActive(index)}
              />
            ))
          }
        </Stack>
      </Navbar.Section>
      <Navbar.Section>
        <Stack justify="end" spacing={0}>
          <NavbarLink icon={IconSettings} label="Settings" />
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
}