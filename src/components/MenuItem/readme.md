##### MenuItem base

```js
const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
const { faAlignCenter, faAlignRight, faEllipsisV } = require('@fortawesome/free-solid-svg-icons');

<div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
    <GlobalHeader
        src="images/user/user3.jpg"
        className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large"
    >
        <ButtonMenu
            menuAlignment="right"
            menuSize="small"
            label="Menu"
            icon={<FontAwesomeIcon icon={faEllipsisV} />}
        >
            <MenuItem label="Menu Item Header" variant="header" />
            <MenuItem label="Menu Item Base" />
            <MenuItem label="Menu Item Base" />
            <MenuItem label="Menu Item Disabled" disabled />
            <MenuDivider variant="space" />
            <MenuItem
                label="Menu Item with Icon"
                icon={<FontAwesomeIcon icon={faAlignCenter} />}
                iconPosition="left"
            />
            <MenuItem
                label="Menu Item with Icon"
                icon={<FontAwesomeIcon icon={faAlignRight} />}
                iconPosition="left"
            />
        </ButtonMenu>
    </GlobalHeader>
</div>;
```
