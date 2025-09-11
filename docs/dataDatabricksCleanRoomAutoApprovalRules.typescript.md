# `dataDatabricksCleanRoomAutoApprovalRules` Submodule <a name="`dataDatabricksCleanRoomAutoApprovalRules` Submodule" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksCleanRoomAutoApprovalRules <a name="DataDatabricksCleanRoomAutoApprovalRules" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_auto_approval_rules databricks_clean_room_auto_approval_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomAutoApprovalRules } from '@cdktf/provider-databricks'

new dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules(scope: Construct, id: string, config?: DataDatabricksCleanRoomAutoApprovalRulesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig">DataDatabricksCleanRoomAutoApprovalRulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig">DataDatabricksCleanRoomAutoApprovalRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksCleanRoomAutoApprovalRules resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.isConstruct"></a>

```typescript
import { dataDatabricksCleanRoomAutoApprovalRules } from '@cdktf/provider-databricks'

dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.isTerraformElement"></a>

```typescript
import { dataDatabricksCleanRoomAutoApprovalRules } from '@cdktf/provider-databricks'

dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.isTerraformDataSource"></a>

```typescript
import { dataDatabricksCleanRoomAutoApprovalRules } from '@cdktf/provider-databricks'

dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.generateConfigForImport"></a>

```typescript
import { dataDatabricksCleanRoomAutoApprovalRules } from '@cdktf/provider-databricks'

dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatabricksCleanRoomAutoApprovalRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksCleanRoomAutoApprovalRules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksCleanRoomAutoApprovalRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_auto_approval_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksCleanRoomAutoApprovalRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList">DataDatabricksCleanRoomAutoApprovalRulesRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.rules"></a>

```typescript
public readonly rules: DataDatabricksCleanRoomAutoApprovalRulesRulesList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList">DataDatabricksCleanRoomAutoApprovalRulesRulesList</a>

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksCleanRoomAutoApprovalRulesConfig <a name="DataDatabricksCleanRoomAutoApprovalRulesConfig" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomAutoApprovalRules } from '@cdktf/provider-databricks'

const dataDatabricksCleanRoomAutoApprovalRulesConfig: dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_auto_approval_rules#workspace_id DataDatabricksCleanRoomAutoApprovalRules#workspace_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_auto_approval_rules#workspace_id DataDatabricksCleanRoomAutoApprovalRules#workspace_id}.

---

### DataDatabricksCleanRoomAutoApprovalRulesRules <a name="DataDatabricksCleanRoomAutoApprovalRulesRules" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRules.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomAutoApprovalRules } from '@cdktf/provider-databricks'

const dataDatabricksCleanRoomAutoApprovalRulesRules: dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRules.property.authorCollaboratorAlias">authorCollaboratorAlias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_auto_approval_rules#author_collaborator_alias DataDatabricksCleanRoomAutoApprovalRules#author_collaborator_alias}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRules.property.authorScope">authorScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_auto_approval_rules#author_scope DataDatabricksCleanRoomAutoApprovalRules#author_scope}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRules.property.cleanRoomName">cleanRoomName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_auto_approval_rules#clean_room_name DataDatabricksCleanRoomAutoApprovalRules#clean_room_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRules.property.runnerCollaboratorAlias">runnerCollaboratorAlias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_auto_approval_rules#runner_collaborator_alias DataDatabricksCleanRoomAutoApprovalRules#runner_collaborator_alias}. |

---

##### `authorCollaboratorAlias`<sup>Optional</sup> <a name="authorCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRules.property.authorCollaboratorAlias"></a>

```typescript
public readonly authorCollaboratorAlias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_auto_approval_rules#author_collaborator_alias DataDatabricksCleanRoomAutoApprovalRules#author_collaborator_alias}.

---

##### `authorScope`<sup>Optional</sup> <a name="authorScope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRules.property.authorScope"></a>

```typescript
public readonly authorScope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_auto_approval_rules#author_scope DataDatabricksCleanRoomAutoApprovalRules#author_scope}.

---

##### `cleanRoomName`<sup>Optional</sup> <a name="cleanRoomName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRules.property.cleanRoomName"></a>

```typescript
public readonly cleanRoomName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_auto_approval_rules#clean_room_name DataDatabricksCleanRoomAutoApprovalRules#clean_room_name}.

---

##### `runnerCollaboratorAlias`<sup>Optional</sup> <a name="runnerCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRules.property.runnerCollaboratorAlias"></a>

```typescript
public readonly runnerCollaboratorAlias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_auto_approval_rules#runner_collaborator_alias DataDatabricksCleanRoomAutoApprovalRules#runner_collaborator_alias}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksCleanRoomAutoApprovalRulesRulesList <a name="DataDatabricksCleanRoomAutoApprovalRulesRulesList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomAutoApprovalRules } from '@cdktf/provider-databricks'

new dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.get"></a>

```typescript
public get(index: number): DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRules">DataDatabricksCleanRoomAutoApprovalRulesRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksCleanRoomAutoApprovalRulesRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRules">DataDatabricksCleanRoomAutoApprovalRulesRules</a>[]

---


### DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference <a name="DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.Initializer"></a>

```typescript
import { dataDatabricksCleanRoomAutoApprovalRules } from '@cdktf/provider-databricks'

new dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.resetAuthorCollaboratorAlias">resetAuthorCollaboratorAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.resetAuthorScope">resetAuthorScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.resetCleanRoomName">resetCleanRoomName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.resetRunnerCollaboratorAlias">resetRunnerCollaboratorAlias</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorCollaboratorAlias` <a name="resetAuthorCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.resetAuthorCollaboratorAlias"></a>

```typescript
public resetAuthorCollaboratorAlias(): void
```

##### `resetAuthorScope` <a name="resetAuthorScope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.resetAuthorScope"></a>

```typescript
public resetAuthorScope(): void
```

##### `resetCleanRoomName` <a name="resetCleanRoomName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.resetCleanRoomName"></a>

```typescript
public resetCleanRoomName(): void
```

##### `resetRunnerCollaboratorAlias` <a name="resetRunnerCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.resetRunnerCollaboratorAlias"></a>

```typescript
public resetRunnerCollaboratorAlias(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.createdAt">createdAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.ruleId">ruleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.ruleOwnerCollaboratorAlias">ruleOwnerCollaboratorAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.authorCollaboratorAliasInput">authorCollaboratorAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.authorScopeInput">authorScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.cleanRoomNameInput">cleanRoomNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.runnerCollaboratorAliasInput">runnerCollaboratorAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.authorCollaboratorAlias">authorCollaboratorAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.authorScope">authorScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.cleanRoomName">cleanRoomName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.runnerCollaboratorAlias">runnerCollaboratorAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRules">DataDatabricksCleanRoomAutoApprovalRulesRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: number;
```

- *Type:* number

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

---

##### `ruleOwnerCollaboratorAlias`<sup>Required</sup> <a name="ruleOwnerCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.ruleOwnerCollaboratorAlias"></a>

```typescript
public readonly ruleOwnerCollaboratorAlias: string;
```

- *Type:* string

---

##### `authorCollaboratorAliasInput`<sup>Optional</sup> <a name="authorCollaboratorAliasInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.authorCollaboratorAliasInput"></a>

```typescript
public readonly authorCollaboratorAliasInput: string;
```

- *Type:* string

---

##### `authorScopeInput`<sup>Optional</sup> <a name="authorScopeInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.authorScopeInput"></a>

```typescript
public readonly authorScopeInput: string;
```

- *Type:* string

---

##### `cleanRoomNameInput`<sup>Optional</sup> <a name="cleanRoomNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.cleanRoomNameInput"></a>

```typescript
public readonly cleanRoomNameInput: string;
```

- *Type:* string

---

##### `runnerCollaboratorAliasInput`<sup>Optional</sup> <a name="runnerCollaboratorAliasInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.runnerCollaboratorAliasInput"></a>

```typescript
public readonly runnerCollaboratorAliasInput: string;
```

- *Type:* string

---

##### `authorCollaboratorAlias`<sup>Required</sup> <a name="authorCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.authorCollaboratorAlias"></a>

```typescript
public readonly authorCollaboratorAlias: string;
```

- *Type:* string

---

##### `authorScope`<sup>Required</sup> <a name="authorScope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.authorScope"></a>

```typescript
public readonly authorScope: string;
```

- *Type:* string

---

##### `cleanRoomName`<sup>Required</sup> <a name="cleanRoomName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.cleanRoomName"></a>

```typescript
public readonly cleanRoomName: string;
```

- *Type:* string

---

##### `runnerCollaboratorAlias`<sup>Required</sup> <a name="runnerCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.runnerCollaboratorAlias"></a>

```typescript
public readonly runnerCollaboratorAlias: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksCleanRoomAutoApprovalRulesRules;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRules">DataDatabricksCleanRoomAutoApprovalRulesRules</a>

---



