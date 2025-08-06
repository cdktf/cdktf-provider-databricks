# `dataDatabricksCleanRoomsCleanRoom` Submodule <a name="`dataDatabricksCleanRoomsCleanRoom` Submodule" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksCleanRoomsCleanRoom <a name="DataDatabricksCleanRoomsCleanRoom" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room databricks_clean_rooms_clean_room}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRoom } from '@cdktf/provider-databricks'

new dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom(scope: Construct, id: string, config?: DataDatabricksCleanRoomsCleanRoomConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig">DataDatabricksCleanRoomsCleanRoomConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig">DataDatabricksCleanRoomsCleanRoomConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.putRemoteDetailedInfo">putRemoteDetailedInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.resetRemoteDetailedInfo">resetRemoteDetailedInfo</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putRemoteDetailedInfo` <a name="putRemoteDetailedInfo" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.putRemoteDetailedInfo"></a>

```typescript
public putRemoteDetailedInfo(value: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.putRemoteDetailedInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo</a>

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOwner` <a name="resetOwner" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.resetOwner"></a>

```typescript
public resetOwner(): void
```

##### `resetRemoteDetailedInfo` <a name="resetRemoteDetailedInfo" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.resetRemoteDetailedInfo"></a>

```typescript
public resetRemoteDetailedInfo(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksCleanRoomsCleanRoom resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.isConstruct"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRoom } from '@cdktf/provider-databricks'

dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.isTerraformElement"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRoom } from '@cdktf/provider-databricks'

dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.isTerraformDataSource"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRoom } from '@cdktf/provider-databricks'

dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.generateConfigForImport"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRoom } from '@cdktf/provider-databricks'

dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatabricksCleanRoomsCleanRoom resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksCleanRoomsCleanRoom to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksCleanRoomsCleanRoom that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksCleanRoomsCleanRoom to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.accessRestricted">accessRestricted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.createdAt">createdAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.localCollaboratorAlias">localCollaboratorAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.outputCatalog">outputCatalog</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference">DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.remoteDetailedInfo">remoteDetailedInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.updatedAt">updatedAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.ownerInput">ownerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.remoteDetailedInfoInput">remoteDetailedInfoInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.owner">owner</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `accessRestricted`<sup>Required</sup> <a name="accessRestricted" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.accessRestricted"></a>

```typescript
public readonly accessRestricted: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.createdAt"></a>

```typescript
public readonly createdAt: number;
```

- *Type:* number

---

##### `localCollaboratorAlias`<sup>Required</sup> <a name="localCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.localCollaboratorAlias"></a>

```typescript
public readonly localCollaboratorAlias: string;
```

- *Type:* string

---

##### `outputCatalog`<sup>Required</sup> <a name="outputCatalog" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.outputCatalog"></a>

```typescript
public readonly outputCatalog: DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference">DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference</a>

---

##### `remoteDetailedInfo`<sup>Required</sup> <a name="remoteDetailedInfo" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.remoteDetailedInfo"></a>

```typescript
public readonly remoteDetailedInfo: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.updatedAt"></a>

```typescript
public readonly updatedAt: number;
```

- *Type:* number

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* string

---

##### `remoteDetailedInfoInput`<sup>Optional</sup> <a name="remoteDetailedInfoInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.remoteDetailedInfoInput"></a>

```typescript
public readonly remoteDetailedInfoInput: IResolvable | DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksCleanRoomsCleanRoomConfig <a name="DataDatabricksCleanRoomsCleanRoomConfig" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRoom } from '@cdktf/provider-databricks'

const dataDatabricksCleanRoomsCleanRoomConfig: dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.comment">comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#comment DataDatabricksCleanRoomsCleanRoom#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#name DataDatabricksCleanRoomsCleanRoom#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.owner">owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#owner DataDatabricksCleanRoomsCleanRoom#owner}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.remoteDetailedInfo">remoteDetailedInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#remote_detailed_info DataDatabricksCleanRoomsCleanRoom#remote_detailed_info}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#comment DataDatabricksCleanRoomsCleanRoom#comment}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#name DataDatabricksCleanRoomsCleanRoom#name}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#owner DataDatabricksCleanRoomsCleanRoom#owner}.

---

##### `remoteDetailedInfo`<sup>Optional</sup> <a name="remoteDetailedInfo" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.remoteDetailedInfo"></a>

```typescript
public readonly remoteDetailedInfo: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#remote_detailed_info DataDatabricksCleanRoomsCleanRoom#remote_detailed_info}.

---

### DataDatabricksCleanRoomsCleanRoomOutputCatalog <a name="DataDatabricksCleanRoomsCleanRoomOutputCatalog" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalog.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRoom } from '@cdktf/provider-databricks'

const dataDatabricksCleanRoomsCleanRoomOutputCatalog: dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalog = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalog.property.catalogName">catalogName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#catalog_name DataDatabricksCleanRoomsCleanRoom#catalog_name}. |

---

##### `catalogName`<sup>Optional</sup> <a name="catalogName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalog.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#catalog_name DataDatabricksCleanRoomsCleanRoom#catalog_name}.

---

### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRoom } from '@cdktf/provider-databricks'

const dataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo: dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo.property.cloudVendor">cloudVendor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#cloud_vendor DataDatabricksCleanRoomsCleanRoom#cloud_vendor}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo.property.collaborators">collaborators</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#collaborators DataDatabricksCleanRoomsCleanRoom#collaborators}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo.property.egressNetworkPolicy">egressNetworkPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#egress_network_policy DataDatabricksCleanRoomsCleanRoom#egress_network_policy}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#region DataDatabricksCleanRoomsCleanRoom#region}. |

---

##### `cloudVendor`<sup>Optional</sup> <a name="cloudVendor" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo.property.cloudVendor"></a>

```typescript
public readonly cloudVendor: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#cloud_vendor DataDatabricksCleanRoomsCleanRoom#cloud_vendor}.

---

##### `collaborators`<sup>Optional</sup> <a name="collaborators" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo.property.collaborators"></a>

```typescript
public readonly collaborators: IResolvable | DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#collaborators DataDatabricksCleanRoomsCleanRoom#collaborators}.

---

##### `egressNetworkPolicy`<sup>Optional</sup> <a name="egressNetworkPolicy" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo.property.egressNetworkPolicy"></a>

```typescript
public readonly egressNetworkPolicy: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#egress_network_policy DataDatabricksCleanRoomsCleanRoom#egress_network_policy}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#region DataDatabricksCleanRoomsCleanRoom#region}.

---

### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRoom } from '@cdktf/provider-databricks'

const dataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators: dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators.property.collaboratorAlias">collaboratorAlias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#collaborator_alias DataDatabricksCleanRoomsCleanRoom#collaborator_alias}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators.property.globalMetastoreId">globalMetastoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#global_metastore_id DataDatabricksCleanRoomsCleanRoom#global_metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators.property.inviteRecipientEmail">inviteRecipientEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#invite_recipient_email DataDatabricksCleanRoomsCleanRoom#invite_recipient_email}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators.property.inviteRecipientWorkspaceId">inviteRecipientWorkspaceId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#invite_recipient_workspace_id DataDatabricksCleanRoomsCleanRoom#invite_recipient_workspace_id}. |

---

##### `collaboratorAlias`<sup>Required</sup> <a name="collaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators.property.collaboratorAlias"></a>

```typescript
public readonly collaboratorAlias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#collaborator_alias DataDatabricksCleanRoomsCleanRoom#collaborator_alias}.

---

##### `globalMetastoreId`<sup>Optional</sup> <a name="globalMetastoreId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators.property.globalMetastoreId"></a>

```typescript
public readonly globalMetastoreId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#global_metastore_id DataDatabricksCleanRoomsCleanRoom#global_metastore_id}.

---

##### `inviteRecipientEmail`<sup>Optional</sup> <a name="inviteRecipientEmail" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators.property.inviteRecipientEmail"></a>

```typescript
public readonly inviteRecipientEmail: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#invite_recipient_email DataDatabricksCleanRoomsCleanRoom#invite_recipient_email}.

---

##### `inviteRecipientWorkspaceId`<sup>Optional</sup> <a name="inviteRecipientWorkspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators.property.inviteRecipientWorkspaceId"></a>

```typescript
public readonly inviteRecipientWorkspaceId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#invite_recipient_workspace_id DataDatabricksCleanRoomsCleanRoom#invite_recipient_workspace_id}.

---

### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfile <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfile" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfile.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRoom } from '@cdktf/provider-databricks'

const dataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfile: dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfile.property.complianceStandards">complianceStandards</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#compliance_standards DataDatabricksCleanRoomsCleanRoom#compliance_standards}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfile.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#is_enabled DataDatabricksCleanRoomsCleanRoom#is_enabled}. |

---

##### `complianceStandards`<sup>Optional</sup> <a name="complianceStandards" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfile.property.complianceStandards"></a>

```typescript
public readonly complianceStandards: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#compliance_standards DataDatabricksCleanRoomsCleanRoom#compliance_standards}.

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfile.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#is_enabled DataDatabricksCleanRoomsCleanRoom#is_enabled}.

---

### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRoom } from '@cdktf/provider-databricks'

const dataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator: dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator.property.collaboratorAlias">collaboratorAlias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#collaborator_alias DataDatabricksCleanRoomsCleanRoom#collaborator_alias}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator.property.globalMetastoreId">globalMetastoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#global_metastore_id DataDatabricksCleanRoomsCleanRoom#global_metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator.property.inviteRecipientEmail">inviteRecipientEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#invite_recipient_email DataDatabricksCleanRoomsCleanRoom#invite_recipient_email}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator.property.inviteRecipientWorkspaceId">inviteRecipientWorkspaceId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#invite_recipient_workspace_id DataDatabricksCleanRoomsCleanRoom#invite_recipient_workspace_id}. |

---

##### `collaboratorAlias`<sup>Required</sup> <a name="collaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator.property.collaboratorAlias"></a>

```typescript
public readonly collaboratorAlias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#collaborator_alias DataDatabricksCleanRoomsCleanRoom#collaborator_alias}.

---

##### `globalMetastoreId`<sup>Optional</sup> <a name="globalMetastoreId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator.property.globalMetastoreId"></a>

```typescript
public readonly globalMetastoreId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#global_metastore_id DataDatabricksCleanRoomsCleanRoom#global_metastore_id}.

---

##### `inviteRecipientEmail`<sup>Optional</sup> <a name="inviteRecipientEmail" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator.property.inviteRecipientEmail"></a>

```typescript
public readonly inviteRecipientEmail: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#invite_recipient_email DataDatabricksCleanRoomsCleanRoom#invite_recipient_email}.

---

##### `inviteRecipientWorkspaceId`<sup>Optional</sup> <a name="inviteRecipientWorkspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator.property.inviteRecipientWorkspaceId"></a>

```typescript
public readonly inviteRecipientWorkspaceId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#invite_recipient_workspace_id DataDatabricksCleanRoomsCleanRoom#invite_recipient_workspace_id}.

---

### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRoom } from '@cdktf/provider-databricks'

const dataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy: dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy.property.internetAccess">internetAccess</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#internet_access DataDatabricksCleanRoomsCleanRoom#internet_access}. |

---

##### `internetAccess`<sup>Optional</sup> <a name="internetAccess" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy.property.internetAccess"></a>

```typescript
public readonly internetAccess: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#internet_access DataDatabricksCleanRoomsCleanRoom#internet_access}.

---

### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRoom } from '@cdktf/provider-databricks'

const dataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess: dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess.property.allowedInternetDestinations">allowedInternetDestinations</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#allowed_internet_destinations DataDatabricksCleanRoomsCleanRoom#allowed_internet_destinations}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess.property.allowedStorageDestinations">allowedStorageDestinations</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#allowed_storage_destinations DataDatabricksCleanRoomsCleanRoom#allowed_storage_destinations}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess.property.logOnlyMode">logOnlyMode</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#log_only_mode DataDatabricksCleanRoomsCleanRoom#log_only_mode}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess.property.restrictionMode">restrictionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#restriction_mode DataDatabricksCleanRoomsCleanRoom#restriction_mode}. |

---

##### `allowedInternetDestinations`<sup>Optional</sup> <a name="allowedInternetDestinations" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess.property.allowedInternetDestinations"></a>

```typescript
public readonly allowedInternetDestinations: IResolvable | DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#allowed_internet_destinations DataDatabricksCleanRoomsCleanRoom#allowed_internet_destinations}.

---

##### `allowedStorageDestinations`<sup>Optional</sup> <a name="allowedStorageDestinations" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess.property.allowedStorageDestinations"></a>

```typescript
public readonly allowedStorageDestinations: IResolvable | DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#allowed_storage_destinations DataDatabricksCleanRoomsCleanRoom#allowed_storage_destinations}.

---

##### `logOnlyMode`<sup>Optional</sup> <a name="logOnlyMode" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess.property.logOnlyMode"></a>

```typescript
public readonly logOnlyMode: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#log_only_mode DataDatabricksCleanRoomsCleanRoom#log_only_mode}.

---

##### `restrictionMode`<sup>Optional</sup> <a name="restrictionMode" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess.property.restrictionMode"></a>

```typescript
public readonly restrictionMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#restriction_mode DataDatabricksCleanRoomsCleanRoom#restriction_mode}.

---

### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRoom } from '@cdktf/provider-databricks'

const dataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations: dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations.property.destination">destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#destination DataDatabricksCleanRoomsCleanRoom#destination}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#protocol DataDatabricksCleanRoomsCleanRoom#protocol}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#type DataDatabricksCleanRoomsCleanRoom#type}. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#destination DataDatabricksCleanRoomsCleanRoom#destination}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#protocol DataDatabricksCleanRoomsCleanRoom#protocol}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#type DataDatabricksCleanRoomsCleanRoom#type}.

---

### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRoom } from '@cdktf/provider-databricks'

const dataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations: dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.allowedPaths">allowedPaths</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#allowed_paths DataDatabricksCleanRoomsCleanRoom#allowed_paths}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.azureContainer">azureContainer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#azure_container DataDatabricksCleanRoomsCleanRoom#azure_container}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.azureDnsZone">azureDnsZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#azure_dns_zone DataDatabricksCleanRoomsCleanRoom#azure_dns_zone}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.azureStorageAccount">azureStorageAccount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#azure_storage_account DataDatabricksCleanRoomsCleanRoom#azure_storage_account}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.azureStorageService">azureStorageService</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#azure_storage_service DataDatabricksCleanRoomsCleanRoom#azure_storage_service}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.bucketName">bucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#bucket_name DataDatabricksCleanRoomsCleanRoom#bucket_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#region DataDatabricksCleanRoomsCleanRoom#region}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#type DataDatabricksCleanRoomsCleanRoom#type}. |

---

##### `allowedPaths`<sup>Optional</sup> <a name="allowedPaths" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.allowedPaths"></a>

```typescript
public readonly allowedPaths: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#allowed_paths DataDatabricksCleanRoomsCleanRoom#allowed_paths}.

---

##### `azureContainer`<sup>Optional</sup> <a name="azureContainer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.azureContainer"></a>

```typescript
public readonly azureContainer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#azure_container DataDatabricksCleanRoomsCleanRoom#azure_container}.

---

##### `azureDnsZone`<sup>Optional</sup> <a name="azureDnsZone" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.azureDnsZone"></a>

```typescript
public readonly azureDnsZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#azure_dns_zone DataDatabricksCleanRoomsCleanRoom#azure_dns_zone}.

---

##### `azureStorageAccount`<sup>Optional</sup> <a name="azureStorageAccount" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.azureStorageAccount"></a>

```typescript
public readonly azureStorageAccount: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#azure_storage_account DataDatabricksCleanRoomsCleanRoom#azure_storage_account}.

---

##### `azureStorageService`<sup>Optional</sup> <a name="azureStorageService" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.azureStorageService"></a>

```typescript
public readonly azureStorageService: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#azure_storage_service DataDatabricksCleanRoomsCleanRoom#azure_storage_service}.

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#bucket_name DataDatabricksCleanRoomsCleanRoom#bucket_name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#region DataDatabricksCleanRoomsCleanRoom#region}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#type DataDatabricksCleanRoomsCleanRoom#type}.

---

### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRoom } from '@cdktf/provider-databricks'

const dataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode: dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode.property.logOnlyModeType">logOnlyModeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#log_only_mode_type DataDatabricksCleanRoomsCleanRoom#log_only_mode_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode.property.workloads">workloads</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#workloads DataDatabricksCleanRoomsCleanRoom#workloads}. |

---

##### `logOnlyModeType`<sup>Optional</sup> <a name="logOnlyModeType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode.property.logOnlyModeType"></a>

```typescript
public readonly logOnlyModeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#log_only_mode_type DataDatabricksCleanRoomsCleanRoom#log_only_mode_type}.

---

##### `workloads`<sup>Optional</sup> <a name="workloads" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode.property.workloads"></a>

```typescript
public readonly workloads: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_room#workloads DataDatabricksCleanRoomsCleanRoom#workloads}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference <a name="DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRoom } from '@cdktf/provider-databricks'

new dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.resetCatalogName">resetCatalogName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogName` <a name="resetCatalogName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.resetCatalogName"></a>

```typescript
public resetCatalogName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.property.catalogNameInput">catalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.property.catalogName">catalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalog">DataDatabricksCleanRoomsCleanRoomOutputCatalog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.property.catalogNameInput"></a>

```typescript
public readonly catalogNameInput: string;
```

- *Type:* string

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksCleanRoomsCleanRoomOutputCatalog;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalog">DataDatabricksCleanRoomsCleanRoomOutputCatalog</a>

---


### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRoom } from '@cdktf/provider-databricks'

new dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.get"></a>

```typescript
public get(index: number): DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators</a>[]

---


### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRoom } from '@cdktf/provider-databricks'

new dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.resetGlobalMetastoreId">resetGlobalMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.resetInviteRecipientEmail">resetInviteRecipientEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.resetInviteRecipientWorkspaceId">resetInviteRecipientWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGlobalMetastoreId` <a name="resetGlobalMetastoreId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.resetGlobalMetastoreId"></a>

```typescript
public resetGlobalMetastoreId(): void
```

##### `resetInviteRecipientEmail` <a name="resetInviteRecipientEmail" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.resetInviteRecipientEmail"></a>

```typescript
public resetInviteRecipientEmail(): void
```

##### `resetInviteRecipientWorkspaceId` <a name="resetInviteRecipientWorkspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.resetInviteRecipientWorkspaceId"></a>

```typescript
public resetInviteRecipientWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.organizationName">organizationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.collaboratorAliasInput">collaboratorAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.globalMetastoreIdInput">globalMetastoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.inviteRecipientEmailInput">inviteRecipientEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.inviteRecipientWorkspaceIdInput">inviteRecipientWorkspaceIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.collaboratorAlias">collaboratorAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.globalMetastoreId">globalMetastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.inviteRecipientEmail">inviteRecipientEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.inviteRecipientWorkspaceId">inviteRecipientWorkspaceId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `organizationName`<sup>Required</sup> <a name="organizationName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.organizationName"></a>

```typescript
public readonly organizationName: string;
```

- *Type:* string

---

##### `collaboratorAliasInput`<sup>Optional</sup> <a name="collaboratorAliasInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.collaboratorAliasInput"></a>

```typescript
public readonly collaboratorAliasInput: string;
```

- *Type:* string

---

##### `globalMetastoreIdInput`<sup>Optional</sup> <a name="globalMetastoreIdInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.globalMetastoreIdInput"></a>

```typescript
public readonly globalMetastoreIdInput: string;
```

- *Type:* string

---

##### `inviteRecipientEmailInput`<sup>Optional</sup> <a name="inviteRecipientEmailInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.inviteRecipientEmailInput"></a>

```typescript
public readonly inviteRecipientEmailInput: string;
```

- *Type:* string

---

##### `inviteRecipientWorkspaceIdInput`<sup>Optional</sup> <a name="inviteRecipientWorkspaceIdInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.inviteRecipientWorkspaceIdInput"></a>

```typescript
public readonly inviteRecipientWorkspaceIdInput: number;
```

- *Type:* number

---

##### `collaboratorAlias`<sup>Required</sup> <a name="collaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.collaboratorAlias"></a>

```typescript
public readonly collaboratorAlias: string;
```

- *Type:* string

---

##### `globalMetastoreId`<sup>Required</sup> <a name="globalMetastoreId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.globalMetastoreId"></a>

```typescript
public readonly globalMetastoreId: string;
```

- *Type:* string

---

##### `inviteRecipientEmail`<sup>Required</sup> <a name="inviteRecipientEmail" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.inviteRecipientEmail"></a>

```typescript
public readonly inviteRecipientEmail: string;
```

- *Type:* string

---

##### `inviteRecipientWorkspaceId`<sup>Required</sup> <a name="inviteRecipientWorkspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.inviteRecipientWorkspaceId"></a>

```typescript
public readonly inviteRecipientWorkspaceId: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators</a>

---


### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRoom } from '@cdktf/provider-databricks'

new dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.resetComplianceStandards">resetComplianceStandards</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComplianceStandards` <a name="resetComplianceStandards" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.resetComplianceStandards"></a>

```typescript
public resetComplianceStandards(): void
```

##### `resetIsEnabled` <a name="resetIsEnabled" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.resetIsEnabled"></a>

```typescript
public resetIsEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.complianceStandardsInput">complianceStandardsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.complianceStandards">complianceStandards</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfile">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `complianceStandardsInput`<sup>Optional</sup> <a name="complianceStandardsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.complianceStandardsInput"></a>

```typescript
public readonly complianceStandardsInput: string[];
```

- *Type:* string[]

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.isEnabledInput"></a>

```typescript
public readonly isEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `complianceStandards`<sup>Required</sup> <a name="complianceStandards" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.complianceStandards"></a>

```typescript
public readonly complianceStandards: string[];
```

- *Type:* string[]

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfile;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfile">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfile</a>

---


### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRoom } from '@cdktf/provider-databricks'

new dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.resetGlobalMetastoreId">resetGlobalMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.resetInviteRecipientEmail">resetInviteRecipientEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.resetInviteRecipientWorkspaceId">resetInviteRecipientWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGlobalMetastoreId` <a name="resetGlobalMetastoreId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.resetGlobalMetastoreId"></a>

```typescript
public resetGlobalMetastoreId(): void
```

##### `resetInviteRecipientEmail` <a name="resetInviteRecipientEmail" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.resetInviteRecipientEmail"></a>

```typescript
public resetInviteRecipientEmail(): void
```

##### `resetInviteRecipientWorkspaceId` <a name="resetInviteRecipientWorkspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.resetInviteRecipientWorkspaceId"></a>

```typescript
public resetInviteRecipientWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.organizationName">organizationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.collaboratorAliasInput">collaboratorAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.globalMetastoreIdInput">globalMetastoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.inviteRecipientEmailInput">inviteRecipientEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.inviteRecipientWorkspaceIdInput">inviteRecipientWorkspaceIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.collaboratorAlias">collaboratorAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.globalMetastoreId">globalMetastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.inviteRecipientEmail">inviteRecipientEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.inviteRecipientWorkspaceId">inviteRecipientWorkspaceId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `organizationName`<sup>Required</sup> <a name="organizationName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.organizationName"></a>

```typescript
public readonly organizationName: string;
```

- *Type:* string

---

##### `collaboratorAliasInput`<sup>Optional</sup> <a name="collaboratorAliasInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.collaboratorAliasInput"></a>

```typescript
public readonly collaboratorAliasInput: string;
```

- *Type:* string

---

##### `globalMetastoreIdInput`<sup>Optional</sup> <a name="globalMetastoreIdInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.globalMetastoreIdInput"></a>

```typescript
public readonly globalMetastoreIdInput: string;
```

- *Type:* string

---

##### `inviteRecipientEmailInput`<sup>Optional</sup> <a name="inviteRecipientEmailInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.inviteRecipientEmailInput"></a>

```typescript
public readonly inviteRecipientEmailInput: string;
```

- *Type:* string

---

##### `inviteRecipientWorkspaceIdInput`<sup>Optional</sup> <a name="inviteRecipientWorkspaceIdInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.inviteRecipientWorkspaceIdInput"></a>

```typescript
public readonly inviteRecipientWorkspaceIdInput: number;
```

- *Type:* number

---

##### `collaboratorAlias`<sup>Required</sup> <a name="collaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.collaboratorAlias"></a>

```typescript
public readonly collaboratorAlias: string;
```

- *Type:* string

---

##### `globalMetastoreId`<sup>Required</sup> <a name="globalMetastoreId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.globalMetastoreId"></a>

```typescript
public readonly globalMetastoreId: string;
```

- *Type:* string

---

##### `inviteRecipientEmail`<sup>Required</sup> <a name="inviteRecipientEmail" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.inviteRecipientEmail"></a>

```typescript
public readonly inviteRecipientEmail: string;
```

- *Type:* string

---

##### `inviteRecipientWorkspaceId`<sup>Required</sup> <a name="inviteRecipientWorkspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.inviteRecipientWorkspaceId"></a>

```typescript
public readonly inviteRecipientWorkspaceId: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator</a>

---


### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRoom } from '@cdktf/provider-databricks'

new dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.get"></a>

```typescript
public get(index: number): DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations</a>[]

---


### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRoom } from '@cdktf/provider-databricks'

new dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.resetDestination">resetDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestination` <a name="resetDestination" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.resetDestination"></a>

```typescript
public resetDestination(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.destinationInput">destinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.destinationInput"></a>

```typescript
public readonly destinationInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations</a>

---


### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRoom } from '@cdktf/provider-databricks'

new dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.get"></a>

```typescript
public get(index: number): DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations</a>[]

---


### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRoom } from '@cdktf/provider-databricks'

new dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetAllowedPaths">resetAllowedPaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetAzureContainer">resetAzureContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetAzureDnsZone">resetAzureDnsZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetAzureStorageAccount">resetAzureStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetAzureStorageService">resetAzureStorageService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedPaths` <a name="resetAllowedPaths" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetAllowedPaths"></a>

```typescript
public resetAllowedPaths(): void
```

##### `resetAzureContainer` <a name="resetAzureContainer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetAzureContainer"></a>

```typescript
public resetAzureContainer(): void
```

##### `resetAzureDnsZone` <a name="resetAzureDnsZone" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetAzureDnsZone"></a>

```typescript
public resetAzureDnsZone(): void
```

##### `resetAzureStorageAccount` <a name="resetAzureStorageAccount" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetAzureStorageAccount"></a>

```typescript
public resetAzureStorageAccount(): void
```

##### `resetAzureStorageService` <a name="resetAzureStorageService" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetAzureStorageService"></a>

```typescript
public resetAzureStorageService(): void
```

##### `resetBucketName` <a name="resetBucketName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetBucketName"></a>

```typescript
public resetBucketName(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.allowedPathsInput">allowedPathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureContainerInput">azureContainerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureDnsZoneInput">azureDnsZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureStorageAccountInput">azureStorageAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureStorageServiceInput">azureStorageServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.allowedPaths">allowedPaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureContainer">azureContainer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureDnsZone">azureDnsZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureStorageAccount">azureStorageAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureStorageService">azureStorageService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedPathsInput`<sup>Optional</sup> <a name="allowedPathsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.allowedPathsInput"></a>

```typescript
public readonly allowedPathsInput: string[];
```

- *Type:* string[]

---

##### `azureContainerInput`<sup>Optional</sup> <a name="azureContainerInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureContainerInput"></a>

```typescript
public readonly azureContainerInput: string;
```

- *Type:* string

---

##### `azureDnsZoneInput`<sup>Optional</sup> <a name="azureDnsZoneInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureDnsZoneInput"></a>

```typescript
public readonly azureDnsZoneInput: string;
```

- *Type:* string

---

##### `azureStorageAccountInput`<sup>Optional</sup> <a name="azureStorageAccountInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureStorageAccountInput"></a>

```typescript
public readonly azureStorageAccountInput: string;
```

- *Type:* string

---

##### `azureStorageServiceInput`<sup>Optional</sup> <a name="azureStorageServiceInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureStorageServiceInput"></a>

```typescript
public readonly azureStorageServiceInput: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `allowedPaths`<sup>Required</sup> <a name="allowedPaths" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.allowedPaths"></a>

```typescript
public readonly allowedPaths: string[];
```

- *Type:* string[]

---

##### `azureContainer`<sup>Required</sup> <a name="azureContainer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureContainer"></a>

```typescript
public readonly azureContainer: string;
```

- *Type:* string

---

##### `azureDnsZone`<sup>Required</sup> <a name="azureDnsZone" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureDnsZone"></a>

```typescript
public readonly azureDnsZone: string;
```

- *Type:* string

---

##### `azureStorageAccount`<sup>Required</sup> <a name="azureStorageAccount" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureStorageAccount"></a>

```typescript
public readonly azureStorageAccount: string;
```

- *Type:* string

---

##### `azureStorageService`<sup>Required</sup> <a name="azureStorageService" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureStorageService"></a>

```typescript
public readonly azureStorageService: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations</a>

---


### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRoom } from '@cdktf/provider-databricks'

new dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.resetLogOnlyModeType">resetLogOnlyModeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.resetWorkloads">resetWorkloads</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogOnlyModeType` <a name="resetLogOnlyModeType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.resetLogOnlyModeType"></a>

```typescript
public resetLogOnlyModeType(): void
```

##### `resetWorkloads` <a name="resetWorkloads" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.resetWorkloads"></a>

```typescript
public resetWorkloads(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.logOnlyModeTypeInput">logOnlyModeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.workloadsInput">workloadsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.logOnlyModeType">logOnlyModeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.workloads">workloads</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logOnlyModeTypeInput`<sup>Optional</sup> <a name="logOnlyModeTypeInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.logOnlyModeTypeInput"></a>

```typescript
public readonly logOnlyModeTypeInput: string;
```

- *Type:* string

---

##### `workloadsInput`<sup>Optional</sup> <a name="workloadsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.workloadsInput"></a>

```typescript
public readonly workloadsInput: string[];
```

- *Type:* string[]

---

##### `logOnlyModeType`<sup>Required</sup> <a name="logOnlyModeType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.logOnlyModeType"></a>

```typescript
public readonly logOnlyModeType: string;
```

- *Type:* string

---

##### `workloads`<sup>Required</sup> <a name="workloads" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.workloads"></a>

```typescript
public readonly workloads: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode</a>

---


### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRoom } from '@cdktf/provider-databricks'

new dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.putAllowedInternetDestinations">putAllowedInternetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.putAllowedStorageDestinations">putAllowedStorageDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.putLogOnlyMode">putLogOnlyMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resetAllowedInternetDestinations">resetAllowedInternetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resetAllowedStorageDestinations">resetAllowedStorageDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resetLogOnlyMode">resetLogOnlyMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resetRestrictionMode">resetRestrictionMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllowedInternetDestinations` <a name="putAllowedInternetDestinations" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.putAllowedInternetDestinations"></a>

```typescript
public putAllowedInternetDestinations(value: IResolvable | DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.putAllowedInternetDestinations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations</a>[]

---

##### `putAllowedStorageDestinations` <a name="putAllowedStorageDestinations" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.putAllowedStorageDestinations"></a>

```typescript
public putAllowedStorageDestinations(value: IResolvable | DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.putAllowedStorageDestinations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations</a>[]

---

##### `putLogOnlyMode` <a name="putLogOnlyMode" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.putLogOnlyMode"></a>

```typescript
public putLogOnlyMode(value: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.putLogOnlyMode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode</a>

---

##### `resetAllowedInternetDestinations` <a name="resetAllowedInternetDestinations" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resetAllowedInternetDestinations"></a>

```typescript
public resetAllowedInternetDestinations(): void
```

##### `resetAllowedStorageDestinations` <a name="resetAllowedStorageDestinations" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resetAllowedStorageDestinations"></a>

```typescript
public resetAllowedStorageDestinations(): void
```

##### `resetLogOnlyMode` <a name="resetLogOnlyMode" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resetLogOnlyMode"></a>

```typescript
public resetLogOnlyMode(): void
```

##### `resetRestrictionMode` <a name="resetRestrictionMode" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resetRestrictionMode"></a>

```typescript
public resetRestrictionMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.allowedInternetDestinations">allowedInternetDestinations</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.allowedStorageDestinations">allowedStorageDestinations</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.logOnlyMode">logOnlyMode</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.allowedInternetDestinationsInput">allowedInternetDestinationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.allowedStorageDestinationsInput">allowedStorageDestinationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.logOnlyModeInput">logOnlyModeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.restrictionModeInput">restrictionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.restrictionMode">restrictionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedInternetDestinations`<sup>Required</sup> <a name="allowedInternetDestinations" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.allowedInternetDestinations"></a>

```typescript
public readonly allowedInternetDestinations: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList</a>

---

##### `allowedStorageDestinations`<sup>Required</sup> <a name="allowedStorageDestinations" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.allowedStorageDestinations"></a>

```typescript
public readonly allowedStorageDestinations: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList</a>

---

##### `logOnlyMode`<sup>Required</sup> <a name="logOnlyMode" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.logOnlyMode"></a>

```typescript
public readonly logOnlyMode: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference</a>

---

##### `allowedInternetDestinationsInput`<sup>Optional</sup> <a name="allowedInternetDestinationsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.allowedInternetDestinationsInput"></a>

```typescript
public readonly allowedInternetDestinationsInput: IResolvable | DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations</a>[]

---

##### `allowedStorageDestinationsInput`<sup>Optional</sup> <a name="allowedStorageDestinationsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.allowedStorageDestinationsInput"></a>

```typescript
public readonly allowedStorageDestinationsInput: IResolvable | DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations</a>[]

---

##### `logOnlyModeInput`<sup>Optional</sup> <a name="logOnlyModeInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.logOnlyModeInput"></a>

```typescript
public readonly logOnlyModeInput: IResolvable | DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode</a>

---

##### `restrictionModeInput`<sup>Optional</sup> <a name="restrictionModeInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.restrictionModeInput"></a>

```typescript
public readonly restrictionModeInput: string;
```

- *Type:* string

---

##### `restrictionMode`<sup>Required</sup> <a name="restrictionMode" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.restrictionMode"></a>

```typescript
public readonly restrictionMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess</a>

---


### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRoom } from '@cdktf/provider-databricks'

new dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.putInternetAccess">putInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.resetInternetAccess">resetInternetAccess</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInternetAccess` <a name="putInternetAccess" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.putInternetAccess"></a>

```typescript
public putInternetAccess(value: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.putInternetAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess</a>

---

##### `resetInternetAccess` <a name="resetInternetAccess" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.resetInternetAccess"></a>

```typescript
public resetInternetAccess(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.property.internetAccess">internetAccess</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.property.internetAccessInput">internetAccessInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internetAccess`<sup>Required</sup> <a name="internetAccess" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.property.internetAccess"></a>

```typescript
public readonly internetAccess: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference</a>

---

##### `internetAccessInput`<sup>Optional</sup> <a name="internetAccessInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.property.internetAccessInput"></a>

```typescript
public readonly internetAccessInput: IResolvable | DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy</a>

---


### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRoom } from '@cdktf/provider-databricks'

new dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.putCollaborators">putCollaborators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.putEgressNetworkPolicy">putEgressNetworkPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.resetCloudVendor">resetCloudVendor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.resetCollaborators">resetCollaborators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.resetEgressNetworkPolicy">resetEgressNetworkPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCollaborators` <a name="putCollaborators" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.putCollaborators"></a>

```typescript
public putCollaborators(value: IResolvable | DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.putCollaborators.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators</a>[]

---

##### `putEgressNetworkPolicy` <a name="putEgressNetworkPolicy" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.putEgressNetworkPolicy"></a>

```typescript
public putEgressNetworkPolicy(value: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.putEgressNetworkPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy</a>

---

##### `resetCloudVendor` <a name="resetCloudVendor" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.resetCloudVendor"></a>

```typescript
public resetCloudVendor(): void
```

##### `resetCollaborators` <a name="resetCollaborators" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.resetCollaborators"></a>

```typescript
public resetCollaborators(): void
```

##### `resetEgressNetworkPolicy` <a name="resetEgressNetworkPolicy" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.resetEgressNetworkPolicy"></a>

```typescript
public resetEgressNetworkPolicy(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.centralCleanRoomId">centralCleanRoomId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.collaborators">collaborators</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.complianceSecurityProfile">complianceSecurityProfile</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.creator">creator</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.egressNetworkPolicy">egressNetworkPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.cloudVendorInput">cloudVendorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.collaboratorsInput">collaboratorsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.egressNetworkPolicyInput">egressNetworkPolicyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.cloudVendor">cloudVendor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `centralCleanRoomId`<sup>Required</sup> <a name="centralCleanRoomId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.centralCleanRoomId"></a>

```typescript
public readonly centralCleanRoomId: string;
```

- *Type:* string

---

##### `collaborators`<sup>Required</sup> <a name="collaborators" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.collaborators"></a>

```typescript
public readonly collaborators: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList</a>

---

##### `complianceSecurityProfile`<sup>Required</sup> <a name="complianceSecurityProfile" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.complianceSecurityProfile"></a>

```typescript
public readonly complianceSecurityProfile: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference</a>

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.creator"></a>

```typescript
public readonly creator: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference</a>

---

##### `egressNetworkPolicy`<sup>Required</sup> <a name="egressNetworkPolicy" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.egressNetworkPolicy"></a>

```typescript
public readonly egressNetworkPolicy: DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference</a>

---

##### `cloudVendorInput`<sup>Optional</sup> <a name="cloudVendorInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.cloudVendorInput"></a>

```typescript
public readonly cloudVendorInput: string;
```

- *Type:* string

---

##### `collaboratorsInput`<sup>Optional</sup> <a name="collaboratorsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.collaboratorsInput"></a>

```typescript
public readonly collaboratorsInput: IResolvable | DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators</a>[]

---

##### `egressNetworkPolicyInput`<sup>Optional</sup> <a name="egressNetworkPolicyInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.egressNetworkPolicyInput"></a>

```typescript
public readonly egressNetworkPolicyInput: IResolvable | DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `cloudVendor`<sup>Required</sup> <a name="cloudVendor" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.cloudVendor"></a>

```typescript
public readonly cloudVendor: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo</a>

---



