# `dataDatabricksCleanRoomsCleanRooms` Submodule <a name="`dataDatabricksCleanRoomsCleanRooms` Submodule" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksCleanRoomsCleanRooms <a name="DataDatabricksCleanRoomsCleanRooms" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms databricks_clean_rooms_clean_rooms}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRooms } from '@cdktf/provider-databricks'

new dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms(scope: Construct, id: string, config?: DataDatabricksCleanRoomsCleanRoomsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsConfig">DataDatabricksCleanRoomsCleanRoomsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsConfig">DataDatabricksCleanRoomsCleanRoomsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksCleanRoomsCleanRooms resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.isConstruct"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRooms } from '@cdktf/provider-databricks'

dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.isTerraformElement"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRooms } from '@cdktf/provider-databricks'

dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.isTerraformDataSource"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRooms } from '@cdktf/provider-databricks'

dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.generateConfigForImport"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRooms } from '@cdktf/provider-databricks'

dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatabricksCleanRoomsCleanRooms resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksCleanRoomsCleanRooms to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksCleanRoomsCleanRooms that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksCleanRoomsCleanRooms to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.cleanRooms">cleanRooms</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList">DataDatabricksCleanRoomsCleanRoomsCleanRoomsList</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `cleanRooms`<sup>Required</sup> <a name="cleanRooms" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.cleanRooms"></a>

```typescript
public readonly cleanRooms: DataDatabricksCleanRoomsCleanRoomsCleanRoomsList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList">DataDatabricksCleanRoomsCleanRoomsCleanRoomsList</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksCleanRoomsCleanRoomsCleanRooms <a name="DataDatabricksCleanRoomsCleanRoomsCleanRooms" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRooms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRooms.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRooms } from '@cdktf/provider-databricks'

const dataDatabricksCleanRoomsCleanRoomsCleanRooms: dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRooms = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRooms.property.comment">comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#comment DataDatabricksCleanRoomsCleanRooms#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRooms.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#name DataDatabricksCleanRoomsCleanRooms#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRooms.property.owner">owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#owner DataDatabricksCleanRoomsCleanRooms#owner}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRooms.property.remoteDetailedInfo">remoteDetailedInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#remote_detailed_info DataDatabricksCleanRoomsCleanRooms#remote_detailed_info}. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRooms.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#comment DataDatabricksCleanRoomsCleanRooms#comment}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRooms.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#name DataDatabricksCleanRoomsCleanRooms#name}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRooms.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#owner DataDatabricksCleanRoomsCleanRooms#owner}.

---

##### `remoteDetailedInfo`<sup>Optional</sup> <a name="remoteDetailedInfo" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRooms.property.remoteDetailedInfo"></a>

```typescript
public readonly remoteDetailedInfo: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#remote_detailed_info DataDatabricksCleanRoomsCleanRooms#remote_detailed_info}.

---

### DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalog <a name="DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalog" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalog.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRooms } from '@cdktf/provider-databricks'

const dataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalog: dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalog = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalog.property.catalogName">catalogName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#catalog_name DataDatabricksCleanRoomsCleanRooms#catalog_name}. |

---

##### `catalogName`<sup>Optional</sup> <a name="catalogName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalog.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#catalog_name DataDatabricksCleanRoomsCleanRooms#catalog_name}.

---

### DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo <a name="DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRooms } from '@cdktf/provider-databricks'

const dataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo: dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo.property.cloudVendor">cloudVendor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#cloud_vendor DataDatabricksCleanRoomsCleanRooms#cloud_vendor}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo.property.collaborators">collaborators</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#collaborators DataDatabricksCleanRoomsCleanRooms#collaborators}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo.property.egressNetworkPolicy">egressNetworkPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicy">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#egress_network_policy DataDatabricksCleanRoomsCleanRooms#egress_network_policy}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#region DataDatabricksCleanRoomsCleanRooms#region}. |

---

##### `cloudVendor`<sup>Optional</sup> <a name="cloudVendor" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo.property.cloudVendor"></a>

```typescript
public readonly cloudVendor: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#cloud_vendor DataDatabricksCleanRoomsCleanRooms#cloud_vendor}.

---

##### `collaborators`<sup>Optional</sup> <a name="collaborators" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo.property.collaborators"></a>

```typescript
public readonly collaborators: IResolvable | DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#collaborators DataDatabricksCleanRoomsCleanRooms#collaborators}.

---

##### `egressNetworkPolicy`<sup>Optional</sup> <a name="egressNetworkPolicy" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo.property.egressNetworkPolicy"></a>

```typescript
public readonly egressNetworkPolicy: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicy;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicy">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#egress_network_policy DataDatabricksCleanRoomsCleanRooms#egress_network_policy}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#region DataDatabricksCleanRoomsCleanRooms#region}.

---

### DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators <a name="DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRooms } from '@cdktf/provider-databricks'

const dataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators: dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators.property.collaboratorAlias">collaboratorAlias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#collaborator_alias DataDatabricksCleanRoomsCleanRooms#collaborator_alias}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators.property.globalMetastoreId">globalMetastoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#global_metastore_id DataDatabricksCleanRoomsCleanRooms#global_metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators.property.inviteRecipientEmail">inviteRecipientEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#invite_recipient_email DataDatabricksCleanRoomsCleanRooms#invite_recipient_email}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators.property.inviteRecipientWorkspaceId">inviteRecipientWorkspaceId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#invite_recipient_workspace_id DataDatabricksCleanRoomsCleanRooms#invite_recipient_workspace_id}. |

---

##### `collaboratorAlias`<sup>Required</sup> <a name="collaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators.property.collaboratorAlias"></a>

```typescript
public readonly collaboratorAlias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#collaborator_alias DataDatabricksCleanRoomsCleanRooms#collaborator_alias}.

---

##### `globalMetastoreId`<sup>Optional</sup> <a name="globalMetastoreId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators.property.globalMetastoreId"></a>

```typescript
public readonly globalMetastoreId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#global_metastore_id DataDatabricksCleanRoomsCleanRooms#global_metastore_id}.

---

##### `inviteRecipientEmail`<sup>Optional</sup> <a name="inviteRecipientEmail" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators.property.inviteRecipientEmail"></a>

```typescript
public readonly inviteRecipientEmail: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#invite_recipient_email DataDatabricksCleanRoomsCleanRooms#invite_recipient_email}.

---

##### `inviteRecipientWorkspaceId`<sup>Optional</sup> <a name="inviteRecipientWorkspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators.property.inviteRecipientWorkspaceId"></a>

```typescript
public readonly inviteRecipientWorkspaceId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#invite_recipient_workspace_id DataDatabricksCleanRoomsCleanRooms#invite_recipient_workspace_id}.

---

### DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfile <a name="DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfile" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfile.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRooms } from '@cdktf/provider-databricks'

const dataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfile: dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfile.property.complianceStandards">complianceStandards</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#compliance_standards DataDatabricksCleanRoomsCleanRooms#compliance_standards}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfile.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#is_enabled DataDatabricksCleanRoomsCleanRooms#is_enabled}. |

---

##### `complianceStandards`<sup>Optional</sup> <a name="complianceStandards" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfile.property.complianceStandards"></a>

```typescript
public readonly complianceStandards: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#compliance_standards DataDatabricksCleanRoomsCleanRooms#compliance_standards}.

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfile.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#is_enabled DataDatabricksCleanRoomsCleanRooms#is_enabled}.

---

### DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreator <a name="DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreator" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreator.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRooms } from '@cdktf/provider-databricks'

const dataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreator: dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreator = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreator.property.collaboratorAlias">collaboratorAlias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#collaborator_alias DataDatabricksCleanRoomsCleanRooms#collaborator_alias}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreator.property.globalMetastoreId">globalMetastoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#global_metastore_id DataDatabricksCleanRoomsCleanRooms#global_metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreator.property.inviteRecipientEmail">inviteRecipientEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#invite_recipient_email DataDatabricksCleanRoomsCleanRooms#invite_recipient_email}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreator.property.inviteRecipientWorkspaceId">inviteRecipientWorkspaceId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#invite_recipient_workspace_id DataDatabricksCleanRoomsCleanRooms#invite_recipient_workspace_id}. |

---

##### `collaboratorAlias`<sup>Required</sup> <a name="collaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreator.property.collaboratorAlias"></a>

```typescript
public readonly collaboratorAlias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#collaborator_alias DataDatabricksCleanRoomsCleanRooms#collaborator_alias}.

---

##### `globalMetastoreId`<sup>Optional</sup> <a name="globalMetastoreId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreator.property.globalMetastoreId"></a>

```typescript
public readonly globalMetastoreId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#global_metastore_id DataDatabricksCleanRoomsCleanRooms#global_metastore_id}.

---

##### `inviteRecipientEmail`<sup>Optional</sup> <a name="inviteRecipientEmail" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreator.property.inviteRecipientEmail"></a>

```typescript
public readonly inviteRecipientEmail: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#invite_recipient_email DataDatabricksCleanRoomsCleanRooms#invite_recipient_email}.

---

##### `inviteRecipientWorkspaceId`<sup>Optional</sup> <a name="inviteRecipientWorkspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreator.property.inviteRecipientWorkspaceId"></a>

```typescript
public readonly inviteRecipientWorkspaceId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#invite_recipient_workspace_id DataDatabricksCleanRoomsCleanRooms#invite_recipient_workspace_id}.

---

### DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicy <a name="DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicy" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicy.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRooms } from '@cdktf/provider-databricks'

const dataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicy: dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicy.property.internetAccess">internetAccess</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#internet_access DataDatabricksCleanRoomsCleanRooms#internet_access}. |

---

##### `internetAccess`<sup>Optional</sup> <a name="internetAccess" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicy.property.internetAccess"></a>

```typescript
public readonly internetAccess: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#internet_access DataDatabricksCleanRoomsCleanRooms#internet_access}.

---

### DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess <a name="DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRooms } from '@cdktf/provider-databricks'

const dataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess: dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess.property.allowedInternetDestinations">allowedInternetDestinations</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#allowed_internet_destinations DataDatabricksCleanRoomsCleanRooms#allowed_internet_destinations}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess.property.allowedStorageDestinations">allowedStorageDestinations</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#allowed_storage_destinations DataDatabricksCleanRoomsCleanRooms#allowed_storage_destinations}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess.property.logOnlyMode">logOnlyMode</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#log_only_mode DataDatabricksCleanRoomsCleanRooms#log_only_mode}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess.property.restrictionMode">restrictionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#restriction_mode DataDatabricksCleanRoomsCleanRooms#restriction_mode}. |

---

##### `allowedInternetDestinations`<sup>Optional</sup> <a name="allowedInternetDestinations" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess.property.allowedInternetDestinations"></a>

```typescript
public readonly allowedInternetDestinations: IResolvable | DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#allowed_internet_destinations DataDatabricksCleanRoomsCleanRooms#allowed_internet_destinations}.

---

##### `allowedStorageDestinations`<sup>Optional</sup> <a name="allowedStorageDestinations" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess.property.allowedStorageDestinations"></a>

```typescript
public readonly allowedStorageDestinations: IResolvable | DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#allowed_storage_destinations DataDatabricksCleanRoomsCleanRooms#allowed_storage_destinations}.

---

##### `logOnlyMode`<sup>Optional</sup> <a name="logOnlyMode" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess.property.logOnlyMode"></a>

```typescript
public readonly logOnlyMode: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#log_only_mode DataDatabricksCleanRoomsCleanRooms#log_only_mode}.

---

##### `restrictionMode`<sup>Optional</sup> <a name="restrictionMode" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess.property.restrictionMode"></a>

```typescript
public readonly restrictionMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#restriction_mode DataDatabricksCleanRoomsCleanRooms#restriction_mode}.

---

### DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations <a name="DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRooms } from '@cdktf/provider-databricks'

const dataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations: dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations.property.destination">destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#destination DataDatabricksCleanRoomsCleanRooms#destination}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#protocol DataDatabricksCleanRoomsCleanRooms#protocol}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#type DataDatabricksCleanRoomsCleanRooms#type}. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#destination DataDatabricksCleanRoomsCleanRooms#destination}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#protocol DataDatabricksCleanRoomsCleanRooms#protocol}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#type DataDatabricksCleanRoomsCleanRooms#type}.

---

### DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations <a name="DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRooms } from '@cdktf/provider-databricks'

const dataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations: dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.allowedPaths">allowedPaths</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#allowed_paths DataDatabricksCleanRoomsCleanRooms#allowed_paths}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.azureContainer">azureContainer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#azure_container DataDatabricksCleanRoomsCleanRooms#azure_container}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.azureDnsZone">azureDnsZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#azure_dns_zone DataDatabricksCleanRoomsCleanRooms#azure_dns_zone}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.azureStorageAccount">azureStorageAccount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#azure_storage_account DataDatabricksCleanRoomsCleanRooms#azure_storage_account}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.azureStorageService">azureStorageService</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#azure_storage_service DataDatabricksCleanRoomsCleanRooms#azure_storage_service}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.bucketName">bucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#bucket_name DataDatabricksCleanRoomsCleanRooms#bucket_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#region DataDatabricksCleanRoomsCleanRooms#region}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#type DataDatabricksCleanRoomsCleanRooms#type}. |

---

##### `allowedPaths`<sup>Optional</sup> <a name="allowedPaths" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.allowedPaths"></a>

```typescript
public readonly allowedPaths: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#allowed_paths DataDatabricksCleanRoomsCleanRooms#allowed_paths}.

---

##### `azureContainer`<sup>Optional</sup> <a name="azureContainer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.azureContainer"></a>

```typescript
public readonly azureContainer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#azure_container DataDatabricksCleanRoomsCleanRooms#azure_container}.

---

##### `azureDnsZone`<sup>Optional</sup> <a name="azureDnsZone" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.azureDnsZone"></a>

```typescript
public readonly azureDnsZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#azure_dns_zone DataDatabricksCleanRoomsCleanRooms#azure_dns_zone}.

---

##### `azureStorageAccount`<sup>Optional</sup> <a name="azureStorageAccount" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.azureStorageAccount"></a>

```typescript
public readonly azureStorageAccount: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#azure_storage_account DataDatabricksCleanRoomsCleanRooms#azure_storage_account}.

---

##### `azureStorageService`<sup>Optional</sup> <a name="azureStorageService" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.azureStorageService"></a>

```typescript
public readonly azureStorageService: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#azure_storage_service DataDatabricksCleanRoomsCleanRooms#azure_storage_service}.

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#bucket_name DataDatabricksCleanRoomsCleanRooms#bucket_name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#region DataDatabricksCleanRoomsCleanRooms#region}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#type DataDatabricksCleanRoomsCleanRooms#type}.

---

### DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode <a name="DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRooms } from '@cdktf/provider-databricks'

const dataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode: dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode.property.logOnlyModeType">logOnlyModeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#log_only_mode_type DataDatabricksCleanRoomsCleanRooms#log_only_mode_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode.property.workloads">workloads</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#workloads DataDatabricksCleanRoomsCleanRooms#workloads}. |

---

##### `logOnlyModeType`<sup>Optional</sup> <a name="logOnlyModeType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode.property.logOnlyModeType"></a>

```typescript
public readonly logOnlyModeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#log_only_mode_type DataDatabricksCleanRoomsCleanRooms#log_only_mode_type}.

---

##### `workloads`<sup>Optional</sup> <a name="workloads" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode.property.workloads"></a>

```typescript
public readonly workloads: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_rooms_clean_rooms#workloads DataDatabricksCleanRoomsCleanRooms#workloads}.

---

### DataDatabricksCleanRoomsCleanRoomsConfig <a name="DataDatabricksCleanRoomsCleanRoomsConfig" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsConfig.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRooms } from '@cdktf/provider-databricks'

const dataDatabricksCleanRoomsCleanRoomsConfig: dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksCleanRoomsCleanRoomsCleanRoomsList <a name="DataDatabricksCleanRoomsCleanRoomsCleanRoomsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRooms } from '@cdktf/provider-databricks'

new dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList.get"></a>

```typescript
public get(index: number): DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRooms">DataDatabricksCleanRoomsCleanRoomsCleanRooms</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksCleanRoomsCleanRoomsCleanRooms[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRooms">DataDatabricksCleanRoomsCleanRoomsCleanRooms</a>[]

---


### DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference <a name="DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRooms } from '@cdktf/provider-databricks'

new dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.resetCatalogName">resetCatalogName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogName` <a name="resetCatalogName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.resetCatalogName"></a>

```typescript
public resetCatalogName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.property.catalogNameInput">catalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.property.catalogName">catalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalog">DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.property.catalogNameInput"></a>

```typescript
public readonly catalogNameInput: string;
```

- *Type:* string

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalog;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalog">DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalog</a>

---


### DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference <a name="DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRooms } from '@cdktf/provider-databricks'

new dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.putRemoteDetailedInfo">putRemoteDetailedInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.resetRemoteDetailedInfo">resetRemoteDetailedInfo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRemoteDetailedInfo` <a name="putRemoteDetailedInfo" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.putRemoteDetailedInfo"></a>

```typescript
public putRemoteDetailedInfo(value: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.putRemoteDetailedInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo</a>

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOwner` <a name="resetOwner" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.resetOwner"></a>

```typescript
public resetOwner(): void
```

##### `resetRemoteDetailedInfo` <a name="resetRemoteDetailedInfo" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.resetRemoteDetailedInfo"></a>

```typescript
public resetRemoteDetailedInfo(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.accessRestricted">accessRestricted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.createdAt">createdAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.localCollaboratorAlias">localCollaboratorAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.outputCatalog">outputCatalog</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference">DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.remoteDetailedInfo">remoteDetailedInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.updatedAt">updatedAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.ownerInput">ownerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.remoteDetailedInfoInput">remoteDetailedInfoInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRooms">DataDatabricksCleanRoomsCleanRoomsCleanRooms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessRestricted`<sup>Required</sup> <a name="accessRestricted" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.accessRestricted"></a>

```typescript
public readonly accessRestricted: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: number;
```

- *Type:* number

---

##### `localCollaboratorAlias`<sup>Required</sup> <a name="localCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.localCollaboratorAlias"></a>

```typescript
public readonly localCollaboratorAlias: string;
```

- *Type:* string

---

##### `outputCatalog`<sup>Required</sup> <a name="outputCatalog" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.outputCatalog"></a>

```typescript
public readonly outputCatalog: DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference">DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference</a>

---

##### `remoteDetailedInfo`<sup>Required</sup> <a name="remoteDetailedInfo" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.remoteDetailedInfo"></a>

```typescript
public readonly remoteDetailedInfo: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: number;
```

- *Type:* number

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* string

---

##### `remoteDetailedInfoInput`<sup>Optional</sup> <a name="remoteDetailedInfoInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.remoteDetailedInfoInput"></a>

```typescript
public readonly remoteDetailedInfoInput: IResolvable | DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksCleanRoomsCleanRoomsCleanRooms;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRooms">DataDatabricksCleanRoomsCleanRoomsCleanRooms</a>

---


### DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList <a name="DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRooms } from '@cdktf/provider-databricks'

new dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList.get"></a>

```typescript
public get(index: number): DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators</a>[]

---


### DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference <a name="DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRooms } from '@cdktf/provider-databricks'

new dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.resetGlobalMetastoreId">resetGlobalMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.resetInviteRecipientEmail">resetInviteRecipientEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.resetInviteRecipientWorkspaceId">resetInviteRecipientWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGlobalMetastoreId` <a name="resetGlobalMetastoreId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.resetGlobalMetastoreId"></a>

```typescript
public resetGlobalMetastoreId(): void
```

##### `resetInviteRecipientEmail` <a name="resetInviteRecipientEmail" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.resetInviteRecipientEmail"></a>

```typescript
public resetInviteRecipientEmail(): void
```

##### `resetInviteRecipientWorkspaceId` <a name="resetInviteRecipientWorkspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.resetInviteRecipientWorkspaceId"></a>

```typescript
public resetInviteRecipientWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.property.organizationName">organizationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.property.collaboratorAliasInput">collaboratorAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.property.globalMetastoreIdInput">globalMetastoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.property.inviteRecipientEmailInput">inviteRecipientEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.property.inviteRecipientWorkspaceIdInput">inviteRecipientWorkspaceIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.property.collaboratorAlias">collaboratorAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.property.globalMetastoreId">globalMetastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.property.inviteRecipientEmail">inviteRecipientEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.property.inviteRecipientWorkspaceId">inviteRecipientWorkspaceId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `organizationName`<sup>Required</sup> <a name="organizationName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.property.organizationName"></a>

```typescript
public readonly organizationName: string;
```

- *Type:* string

---

##### `collaboratorAliasInput`<sup>Optional</sup> <a name="collaboratorAliasInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.property.collaboratorAliasInput"></a>

```typescript
public readonly collaboratorAliasInput: string;
```

- *Type:* string

---

##### `globalMetastoreIdInput`<sup>Optional</sup> <a name="globalMetastoreIdInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.property.globalMetastoreIdInput"></a>

```typescript
public readonly globalMetastoreIdInput: string;
```

- *Type:* string

---

##### `inviteRecipientEmailInput`<sup>Optional</sup> <a name="inviteRecipientEmailInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.property.inviteRecipientEmailInput"></a>

```typescript
public readonly inviteRecipientEmailInput: string;
```

- *Type:* string

---

##### `inviteRecipientWorkspaceIdInput`<sup>Optional</sup> <a name="inviteRecipientWorkspaceIdInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.property.inviteRecipientWorkspaceIdInput"></a>

```typescript
public readonly inviteRecipientWorkspaceIdInput: number;
```

- *Type:* number

---

##### `collaboratorAlias`<sup>Required</sup> <a name="collaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.property.collaboratorAlias"></a>

```typescript
public readonly collaboratorAlias: string;
```

- *Type:* string

---

##### `globalMetastoreId`<sup>Required</sup> <a name="globalMetastoreId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.property.globalMetastoreId"></a>

```typescript
public readonly globalMetastoreId: string;
```

- *Type:* string

---

##### `inviteRecipientEmail`<sup>Required</sup> <a name="inviteRecipientEmail" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.property.inviteRecipientEmail"></a>

```typescript
public readonly inviteRecipientEmail: string;
```

- *Type:* string

---

##### `inviteRecipientWorkspaceId`<sup>Required</sup> <a name="inviteRecipientWorkspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.property.inviteRecipientWorkspaceId"></a>

```typescript
public readonly inviteRecipientWorkspaceId: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators</a>

---


### DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference <a name="DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRooms } from '@cdktf/provider-databricks'

new dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.resetComplianceStandards">resetComplianceStandards</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComplianceStandards` <a name="resetComplianceStandards" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.resetComplianceStandards"></a>

```typescript
public resetComplianceStandards(): void
```

##### `resetIsEnabled` <a name="resetIsEnabled" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.resetIsEnabled"></a>

```typescript
public resetIsEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.complianceStandardsInput">complianceStandardsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.complianceStandards">complianceStandards</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfile">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `complianceStandardsInput`<sup>Optional</sup> <a name="complianceStandardsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.complianceStandardsInput"></a>

```typescript
public readonly complianceStandardsInput: string[];
```

- *Type:* string[]

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.isEnabledInput"></a>

```typescript
public readonly isEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `complianceStandards`<sup>Required</sup> <a name="complianceStandards" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.complianceStandards"></a>

```typescript
public readonly complianceStandards: string[];
```

- *Type:* string[]

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfile;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfile">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfile</a>

---


### DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference <a name="DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRooms } from '@cdktf/provider-databricks'

new dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.resetGlobalMetastoreId">resetGlobalMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.resetInviteRecipientEmail">resetInviteRecipientEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.resetInviteRecipientWorkspaceId">resetInviteRecipientWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGlobalMetastoreId` <a name="resetGlobalMetastoreId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.resetGlobalMetastoreId"></a>

```typescript
public resetGlobalMetastoreId(): void
```

##### `resetInviteRecipientEmail` <a name="resetInviteRecipientEmail" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.resetInviteRecipientEmail"></a>

```typescript
public resetInviteRecipientEmail(): void
```

##### `resetInviteRecipientWorkspaceId` <a name="resetInviteRecipientWorkspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.resetInviteRecipientWorkspaceId"></a>

```typescript
public resetInviteRecipientWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.property.organizationName">organizationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.property.collaboratorAliasInput">collaboratorAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.property.globalMetastoreIdInput">globalMetastoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.property.inviteRecipientEmailInput">inviteRecipientEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.property.inviteRecipientWorkspaceIdInput">inviteRecipientWorkspaceIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.property.collaboratorAlias">collaboratorAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.property.globalMetastoreId">globalMetastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.property.inviteRecipientEmail">inviteRecipientEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.property.inviteRecipientWorkspaceId">inviteRecipientWorkspaceId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreator">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreator</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `organizationName`<sup>Required</sup> <a name="organizationName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.property.organizationName"></a>

```typescript
public readonly organizationName: string;
```

- *Type:* string

---

##### `collaboratorAliasInput`<sup>Optional</sup> <a name="collaboratorAliasInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.property.collaboratorAliasInput"></a>

```typescript
public readonly collaboratorAliasInput: string;
```

- *Type:* string

---

##### `globalMetastoreIdInput`<sup>Optional</sup> <a name="globalMetastoreIdInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.property.globalMetastoreIdInput"></a>

```typescript
public readonly globalMetastoreIdInput: string;
```

- *Type:* string

---

##### `inviteRecipientEmailInput`<sup>Optional</sup> <a name="inviteRecipientEmailInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.property.inviteRecipientEmailInput"></a>

```typescript
public readonly inviteRecipientEmailInput: string;
```

- *Type:* string

---

##### `inviteRecipientWorkspaceIdInput`<sup>Optional</sup> <a name="inviteRecipientWorkspaceIdInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.property.inviteRecipientWorkspaceIdInput"></a>

```typescript
public readonly inviteRecipientWorkspaceIdInput: number;
```

- *Type:* number

---

##### `collaboratorAlias`<sup>Required</sup> <a name="collaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.property.collaboratorAlias"></a>

```typescript
public readonly collaboratorAlias: string;
```

- *Type:* string

---

##### `globalMetastoreId`<sup>Required</sup> <a name="globalMetastoreId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.property.globalMetastoreId"></a>

```typescript
public readonly globalMetastoreId: string;
```

- *Type:* string

---

##### `inviteRecipientEmail`<sup>Required</sup> <a name="inviteRecipientEmail" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.property.inviteRecipientEmail"></a>

```typescript
public readonly inviteRecipientEmail: string;
```

- *Type:* string

---

##### `inviteRecipientWorkspaceId`<sup>Required</sup> <a name="inviteRecipientWorkspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.property.inviteRecipientWorkspaceId"></a>

```typescript
public readonly inviteRecipientWorkspaceId: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreator;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreator">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreator</a>

---


### DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList <a name="DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRooms } from '@cdktf/provider-databricks'

new dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.get"></a>

```typescript
public get(index: number): DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations</a>[]

---


### DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference <a name="DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRooms } from '@cdktf/provider-databricks'

new dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.resetDestination">resetDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestination` <a name="resetDestination" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.resetDestination"></a>

```typescript
public resetDestination(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.destinationInput">destinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.destinationInput"></a>

```typescript
public readonly destinationInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations</a>

---


### DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList <a name="DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRooms } from '@cdktf/provider-databricks'

new dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.get"></a>

```typescript
public get(index: number): DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations</a>[]

---


### DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference <a name="DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRooms } from '@cdktf/provider-databricks'

new dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetAllowedPaths">resetAllowedPaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetAzureContainer">resetAzureContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetAzureDnsZone">resetAzureDnsZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetAzureStorageAccount">resetAzureStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetAzureStorageService">resetAzureStorageService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedPaths` <a name="resetAllowedPaths" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetAllowedPaths"></a>

```typescript
public resetAllowedPaths(): void
```

##### `resetAzureContainer` <a name="resetAzureContainer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetAzureContainer"></a>

```typescript
public resetAzureContainer(): void
```

##### `resetAzureDnsZone` <a name="resetAzureDnsZone" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetAzureDnsZone"></a>

```typescript
public resetAzureDnsZone(): void
```

##### `resetAzureStorageAccount` <a name="resetAzureStorageAccount" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetAzureStorageAccount"></a>

```typescript
public resetAzureStorageAccount(): void
```

##### `resetAzureStorageService` <a name="resetAzureStorageService" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetAzureStorageService"></a>

```typescript
public resetAzureStorageService(): void
```

##### `resetBucketName` <a name="resetBucketName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetBucketName"></a>

```typescript
public resetBucketName(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.allowedPathsInput">allowedPathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureContainerInput">azureContainerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureDnsZoneInput">azureDnsZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureStorageAccountInput">azureStorageAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureStorageServiceInput">azureStorageServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.allowedPaths">allowedPaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureContainer">azureContainer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureDnsZone">azureDnsZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureStorageAccount">azureStorageAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureStorageService">azureStorageService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedPathsInput`<sup>Optional</sup> <a name="allowedPathsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.allowedPathsInput"></a>

```typescript
public readonly allowedPathsInput: string[];
```

- *Type:* string[]

---

##### `azureContainerInput`<sup>Optional</sup> <a name="azureContainerInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureContainerInput"></a>

```typescript
public readonly azureContainerInput: string;
```

- *Type:* string

---

##### `azureDnsZoneInput`<sup>Optional</sup> <a name="azureDnsZoneInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureDnsZoneInput"></a>

```typescript
public readonly azureDnsZoneInput: string;
```

- *Type:* string

---

##### `azureStorageAccountInput`<sup>Optional</sup> <a name="azureStorageAccountInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureStorageAccountInput"></a>

```typescript
public readonly azureStorageAccountInput: string;
```

- *Type:* string

---

##### `azureStorageServiceInput`<sup>Optional</sup> <a name="azureStorageServiceInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureStorageServiceInput"></a>

```typescript
public readonly azureStorageServiceInput: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `allowedPaths`<sup>Required</sup> <a name="allowedPaths" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.allowedPaths"></a>

```typescript
public readonly allowedPaths: string[];
```

- *Type:* string[]

---

##### `azureContainer`<sup>Required</sup> <a name="azureContainer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureContainer"></a>

```typescript
public readonly azureContainer: string;
```

- *Type:* string

---

##### `azureDnsZone`<sup>Required</sup> <a name="azureDnsZone" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureDnsZone"></a>

```typescript
public readonly azureDnsZone: string;
```

- *Type:* string

---

##### `azureStorageAccount`<sup>Required</sup> <a name="azureStorageAccount" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureStorageAccount"></a>

```typescript
public readonly azureStorageAccount: string;
```

- *Type:* string

---

##### `azureStorageService`<sup>Required</sup> <a name="azureStorageService" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureStorageService"></a>

```typescript
public readonly azureStorageService: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations</a>

---


### DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference <a name="DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRooms } from '@cdktf/provider-databricks'

new dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.resetLogOnlyModeType">resetLogOnlyModeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.resetWorkloads">resetWorkloads</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogOnlyModeType` <a name="resetLogOnlyModeType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.resetLogOnlyModeType"></a>

```typescript
public resetLogOnlyModeType(): void
```

##### `resetWorkloads` <a name="resetWorkloads" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.resetWorkloads"></a>

```typescript
public resetWorkloads(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.logOnlyModeTypeInput">logOnlyModeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.workloadsInput">workloadsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.logOnlyModeType">logOnlyModeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.workloads">workloads</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logOnlyModeTypeInput`<sup>Optional</sup> <a name="logOnlyModeTypeInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.logOnlyModeTypeInput"></a>

```typescript
public readonly logOnlyModeTypeInput: string;
```

- *Type:* string

---

##### `workloadsInput`<sup>Optional</sup> <a name="workloadsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.workloadsInput"></a>

```typescript
public readonly workloadsInput: string[];
```

- *Type:* string[]

---

##### `logOnlyModeType`<sup>Required</sup> <a name="logOnlyModeType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.logOnlyModeType"></a>

```typescript
public readonly logOnlyModeType: string;
```

- *Type:* string

---

##### `workloads`<sup>Required</sup> <a name="workloads" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.workloads"></a>

```typescript
public readonly workloads: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode</a>

---


### DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference <a name="DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRooms } from '@cdktf/provider-databricks'

new dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.putAllowedInternetDestinations">putAllowedInternetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.putAllowedStorageDestinations">putAllowedStorageDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.putLogOnlyMode">putLogOnlyMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resetAllowedInternetDestinations">resetAllowedInternetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resetAllowedStorageDestinations">resetAllowedStorageDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resetLogOnlyMode">resetLogOnlyMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resetRestrictionMode">resetRestrictionMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllowedInternetDestinations` <a name="putAllowedInternetDestinations" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.putAllowedInternetDestinations"></a>

```typescript
public putAllowedInternetDestinations(value: IResolvable | DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.putAllowedInternetDestinations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations</a>[]

---

##### `putAllowedStorageDestinations` <a name="putAllowedStorageDestinations" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.putAllowedStorageDestinations"></a>

```typescript
public putAllowedStorageDestinations(value: IResolvable | DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.putAllowedStorageDestinations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations</a>[]

---

##### `putLogOnlyMode` <a name="putLogOnlyMode" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.putLogOnlyMode"></a>

```typescript
public putLogOnlyMode(value: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.putLogOnlyMode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode</a>

---

##### `resetAllowedInternetDestinations` <a name="resetAllowedInternetDestinations" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resetAllowedInternetDestinations"></a>

```typescript
public resetAllowedInternetDestinations(): void
```

##### `resetAllowedStorageDestinations` <a name="resetAllowedStorageDestinations" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resetAllowedStorageDestinations"></a>

```typescript
public resetAllowedStorageDestinations(): void
```

##### `resetLogOnlyMode` <a name="resetLogOnlyMode" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resetLogOnlyMode"></a>

```typescript
public resetLogOnlyMode(): void
```

##### `resetRestrictionMode` <a name="resetRestrictionMode" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resetRestrictionMode"></a>

```typescript
public resetRestrictionMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.allowedInternetDestinations">allowedInternetDestinations</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.allowedStorageDestinations">allowedStorageDestinations</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.logOnlyMode">logOnlyMode</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.allowedInternetDestinationsInput">allowedInternetDestinationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.allowedStorageDestinationsInput">allowedStorageDestinationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.logOnlyModeInput">logOnlyModeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.restrictionModeInput">restrictionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.restrictionMode">restrictionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedInternetDestinations`<sup>Required</sup> <a name="allowedInternetDestinations" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.allowedInternetDestinations"></a>

```typescript
public readonly allowedInternetDestinations: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList</a>

---

##### `allowedStorageDestinations`<sup>Required</sup> <a name="allowedStorageDestinations" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.allowedStorageDestinations"></a>

```typescript
public readonly allowedStorageDestinations: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList</a>

---

##### `logOnlyMode`<sup>Required</sup> <a name="logOnlyMode" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.logOnlyMode"></a>

```typescript
public readonly logOnlyMode: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference</a>

---

##### `allowedInternetDestinationsInput`<sup>Optional</sup> <a name="allowedInternetDestinationsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.allowedInternetDestinationsInput"></a>

```typescript
public readonly allowedInternetDestinationsInput: IResolvable | DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations</a>[]

---

##### `allowedStorageDestinationsInput`<sup>Optional</sup> <a name="allowedStorageDestinationsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.allowedStorageDestinationsInput"></a>

```typescript
public readonly allowedStorageDestinationsInput: IResolvable | DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations</a>[]

---

##### `logOnlyModeInput`<sup>Optional</sup> <a name="logOnlyModeInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.logOnlyModeInput"></a>

```typescript
public readonly logOnlyModeInput: IResolvable | DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode</a>

---

##### `restrictionModeInput`<sup>Optional</sup> <a name="restrictionModeInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.restrictionModeInput"></a>

```typescript
public readonly restrictionModeInput: string;
```

- *Type:* string

---

##### `restrictionMode`<sup>Required</sup> <a name="restrictionMode" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.restrictionMode"></a>

```typescript
public readonly restrictionMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess</a>

---


### DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference <a name="DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRooms } from '@cdktf/provider-databricks'

new dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.putInternetAccess">putInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.resetInternetAccess">resetInternetAccess</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInternetAccess` <a name="putInternetAccess" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.putInternetAccess"></a>

```typescript
public putInternetAccess(value: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.putInternetAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess</a>

---

##### `resetInternetAccess` <a name="resetInternetAccess" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.resetInternetAccess"></a>

```typescript
public resetInternetAccess(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.property.internetAccess">internetAccess</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.property.internetAccessInput">internetAccessInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicy">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internetAccess`<sup>Required</sup> <a name="internetAccess" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.property.internetAccess"></a>

```typescript
public readonly internetAccess: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference</a>

---

##### `internetAccessInput`<sup>Optional</sup> <a name="internetAccessInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.property.internetAccessInput"></a>

```typescript
public readonly internetAccessInput: IResolvable | DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicy;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicy">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicy</a>

---


### DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference <a name="DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomsCleanRooms } from '@cdktf/provider-databricks'

new dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.putCollaborators">putCollaborators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.putEgressNetworkPolicy">putEgressNetworkPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.resetCloudVendor">resetCloudVendor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.resetCollaborators">resetCollaborators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.resetEgressNetworkPolicy">resetEgressNetworkPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCollaborators` <a name="putCollaborators" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.putCollaborators"></a>

```typescript
public putCollaborators(value: IResolvable | DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.putCollaborators.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators</a>[]

---

##### `putEgressNetworkPolicy` <a name="putEgressNetworkPolicy" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.putEgressNetworkPolicy"></a>

```typescript
public putEgressNetworkPolicy(value: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.putEgressNetworkPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicy">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicy</a>

---

##### `resetCloudVendor` <a name="resetCloudVendor" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.resetCloudVendor"></a>

```typescript
public resetCloudVendor(): void
```

##### `resetCollaborators` <a name="resetCollaborators" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.resetCollaborators"></a>

```typescript
public resetCollaborators(): void
```

##### `resetEgressNetworkPolicy` <a name="resetEgressNetworkPolicy" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.resetEgressNetworkPolicy"></a>

```typescript
public resetEgressNetworkPolicy(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.centralCleanRoomId">centralCleanRoomId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.collaborators">collaborators</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.complianceSecurityProfile">complianceSecurityProfile</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.creator">creator</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.egressNetworkPolicy">egressNetworkPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.cloudVendorInput">cloudVendorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.collaboratorsInput">collaboratorsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.egressNetworkPolicyInput">egressNetworkPolicyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicy">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.cloudVendor">cloudVendor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `centralCleanRoomId`<sup>Required</sup> <a name="centralCleanRoomId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.centralCleanRoomId"></a>

```typescript
public readonly centralCleanRoomId: string;
```

- *Type:* string

---

##### `collaborators`<sup>Required</sup> <a name="collaborators" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.collaborators"></a>

```typescript
public readonly collaborators: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList</a>

---

##### `complianceSecurityProfile`<sup>Required</sup> <a name="complianceSecurityProfile" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.complianceSecurityProfile"></a>

```typescript
public readonly complianceSecurityProfile: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference</a>

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.creator"></a>

```typescript
public readonly creator: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference</a>

---

##### `egressNetworkPolicy`<sup>Required</sup> <a name="egressNetworkPolicy" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.egressNetworkPolicy"></a>

```typescript
public readonly egressNetworkPolicy: DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference</a>

---

##### `cloudVendorInput`<sup>Optional</sup> <a name="cloudVendorInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.cloudVendorInput"></a>

```typescript
public readonly cloudVendorInput: string;
```

- *Type:* string

---

##### `collaboratorsInput`<sup>Optional</sup> <a name="collaboratorsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.collaboratorsInput"></a>

```typescript
public readonly collaboratorsInput: IResolvable | DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators</a>[]

---

##### `egressNetworkPolicyInput`<sup>Optional</sup> <a name="egressNetworkPolicyInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.egressNetworkPolicyInput"></a>

```typescript
public readonly egressNetworkPolicyInput: IResolvable | DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicy;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicy">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicy</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `cloudVendor`<sup>Required</sup> <a name="cloudVendor" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.cloudVendor"></a>

```typescript
public readonly cloudVendor: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo</a>

---



