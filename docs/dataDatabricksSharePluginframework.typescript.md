# `dataDatabricksSharePluginframework` Submodule <a name="`dataDatabricksSharePluginframework` Submodule" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksSharePluginframework <a name="DataDatabricksSharePluginframework" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/share_pluginframework databricks_share_pluginframework}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.Initializer"></a>

```typescript
import { dataDatabricksSharePluginframework } from '@cdktf/provider-databricks'

new dataDatabricksSharePluginframework.DataDatabricksSharePluginframework(scope: Construct, id: string, config?: DataDatabricksSharePluginframeworkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig">DataDatabricksSharePluginframeworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig">DataDatabricksSharePluginframeworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.putObject">putObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.resetObject">resetObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.resetStorageRoot">resetStorageRoot</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putObject` <a name="putObject" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.putObject"></a>

```typescript
public putObject(value: IResolvable | DataDatabricksSharePluginframeworkObject[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.putObject.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject">DataDatabricksSharePluginframeworkObject</a>[]

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.resetName"></a>

```typescript
public resetName(): void
```

##### `resetObject` <a name="resetObject" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.resetObject"></a>

```typescript
public resetObject(): void
```

##### `resetOwner` <a name="resetOwner" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.resetOwner"></a>

```typescript
public resetOwner(): void
```

##### `resetStorageRoot` <a name="resetStorageRoot" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.resetStorageRoot"></a>

```typescript
public resetStorageRoot(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksSharePluginframework resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.isConstruct"></a>

```typescript
import { dataDatabricksSharePluginframework } from '@cdktf/provider-databricks'

dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.isTerraformElement"></a>

```typescript
import { dataDatabricksSharePluginframework } from '@cdktf/provider-databricks'

dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.isTerraformDataSource"></a>

```typescript
import { dataDatabricksSharePluginframework } from '@cdktf/provider-databricks'

dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.generateConfigForImport"></a>

```typescript
import { dataDatabricksSharePluginframework } from '@cdktf/provider-databricks'

dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatabricksSharePluginframework resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksSharePluginframework to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksSharePluginframework that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/share_pluginframework#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksSharePluginframework to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.createdAt">createdAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.effectiveOwner">effectiveOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.object">object</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList">DataDatabricksSharePluginframeworkObjectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.storageLocation">storageLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.updatedAt">updatedAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.updatedBy">updatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.objectInput">objectInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject">DataDatabricksSharePluginframeworkObject</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.ownerInput">ownerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.storageRootInput">storageRootInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.storageRoot">storageRoot</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.createdAt"></a>

```typescript
public readonly createdAt: number;
```

- *Type:* number

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `effectiveOwner`<sup>Required</sup> <a name="effectiveOwner" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.effectiveOwner"></a>

```typescript
public readonly effectiveOwner: string;
```

- *Type:* string

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.object"></a>

```typescript
public readonly object: DataDatabricksSharePluginframeworkObjectList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList">DataDatabricksSharePluginframeworkObjectList</a>

---

##### `storageLocation`<sup>Required</sup> <a name="storageLocation" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.storageLocation"></a>

```typescript
public readonly storageLocation: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.updatedAt"></a>

```typescript
public readonly updatedAt: number;
```

- *Type:* number

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.updatedBy"></a>

```typescript
public readonly updatedBy: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.objectInput"></a>

```typescript
public readonly objectInput: IResolvable | DataDatabricksSharePluginframeworkObject[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject">DataDatabricksSharePluginframeworkObject</a>[]

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* string

---

##### `storageRootInput`<sup>Optional</sup> <a name="storageRootInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.storageRootInput"></a>

```typescript
public readonly storageRootInput: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `storageRoot`<sup>Required</sup> <a name="storageRoot" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.storageRoot"></a>

```typescript
public readonly storageRoot: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksSharePluginframeworkConfig <a name="DataDatabricksSharePluginframeworkConfig" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.Initializer"></a>

```typescript
import { dataDatabricksSharePluginframework } from '@cdktf/provider-databricks'

const dataDatabricksSharePluginframeworkConfig: dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.comment">comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/share_pluginframework#comment DataDatabricksSharePluginframework#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/share_pluginframework#name DataDatabricksSharePluginframework#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.object">object</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject">DataDatabricksSharePluginframeworkObject</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/share_pluginframework#object DataDatabricksSharePluginframework#object}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.owner">owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/share_pluginframework#owner DataDatabricksSharePluginframework#owner}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.storageRoot">storageRoot</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/share_pluginframework#storage_root DataDatabricksSharePluginframework#storage_root}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/share_pluginframework#comment DataDatabricksSharePluginframework#comment}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/share_pluginframework#name DataDatabricksSharePluginframework#name}.

---

##### `object`<sup>Optional</sup> <a name="object" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.object"></a>

```typescript
public readonly object: IResolvable | DataDatabricksSharePluginframeworkObject[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject">DataDatabricksSharePluginframeworkObject</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/share_pluginframework#object DataDatabricksSharePluginframework#object}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/share_pluginframework#owner DataDatabricksSharePluginframework#owner}.

---

##### `storageRoot`<sup>Optional</sup> <a name="storageRoot" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.storageRoot"></a>

```typescript
public readonly storageRoot: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/share_pluginframework#storage_root DataDatabricksSharePluginframework#storage_root}.

---

### DataDatabricksSharePluginframeworkObject <a name="DataDatabricksSharePluginframeworkObject" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.Initializer"></a>

```typescript
import { dataDatabricksSharePluginframework } from '@cdktf/provider-databricks'

const dataDatabricksSharePluginframeworkObject: dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/share_pluginframework#name DataDatabricksSharePluginframework#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.cdfEnabled">cdfEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/share_pluginframework#cdf_enabled DataDatabricksSharePluginframework#cdf_enabled}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.comment">comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/share_pluginframework#comment DataDatabricksSharePluginframework#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/share_pluginframework#content DataDatabricksSharePluginframework#content}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.dataObjectType">dataObjectType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/share_pluginframework#data_object_type DataDatabricksSharePluginframework#data_object_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.historyDataSharingStatus">historyDataSharingStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/share_pluginframework#history_data_sharing_status DataDatabricksSharePluginframework#history_data_sharing_status}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.partition">partition</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartition">DataDatabricksSharePluginframeworkObjectPartition</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/share_pluginframework#partition DataDatabricksSharePluginframework#partition}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.sharedAs">sharedAs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/share_pluginframework#shared_as DataDatabricksSharePluginframework#shared_as}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.startVersion">startVersion</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/share_pluginframework#start_version DataDatabricksSharePluginframework#start_version}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.stringSharedAs">stringSharedAs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/share_pluginframework#string_shared_as DataDatabricksSharePluginframework#string_shared_as}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/share_pluginframework#name DataDatabricksSharePluginframework#name}.

---

##### `cdfEnabled`<sup>Optional</sup> <a name="cdfEnabled" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.cdfEnabled"></a>

```typescript
public readonly cdfEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/share_pluginframework#cdf_enabled DataDatabricksSharePluginframework#cdf_enabled}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/share_pluginframework#comment DataDatabricksSharePluginframework#comment}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/share_pluginframework#content DataDatabricksSharePluginframework#content}.

---

##### `dataObjectType`<sup>Optional</sup> <a name="dataObjectType" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.dataObjectType"></a>

```typescript
public readonly dataObjectType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/share_pluginframework#data_object_type DataDatabricksSharePluginframework#data_object_type}.

---

##### `historyDataSharingStatus`<sup>Optional</sup> <a name="historyDataSharingStatus" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.historyDataSharingStatus"></a>

```typescript
public readonly historyDataSharingStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/share_pluginframework#history_data_sharing_status DataDatabricksSharePluginframework#history_data_sharing_status}.

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.partition"></a>

```typescript
public readonly partition: IResolvable | DataDatabricksSharePluginframeworkObjectPartition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartition">DataDatabricksSharePluginframeworkObjectPartition</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/share_pluginframework#partition DataDatabricksSharePluginframework#partition}.

---

##### `sharedAs`<sup>Optional</sup> <a name="sharedAs" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.sharedAs"></a>

```typescript
public readonly sharedAs: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/share_pluginframework#shared_as DataDatabricksSharePluginframework#shared_as}.

---

##### `startVersion`<sup>Optional</sup> <a name="startVersion" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.startVersion"></a>

```typescript
public readonly startVersion: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/share_pluginframework#start_version DataDatabricksSharePluginframework#start_version}.

---

##### `stringSharedAs`<sup>Optional</sup> <a name="stringSharedAs" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.stringSharedAs"></a>

```typescript
public readonly stringSharedAs: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/share_pluginframework#string_shared_as DataDatabricksSharePluginframework#string_shared_as}.

---

### DataDatabricksSharePluginframeworkObjectPartition <a name="DataDatabricksSharePluginframeworkObjectPartition" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartition.Initializer"></a>

```typescript
import { dataDatabricksSharePluginframework } from '@cdktf/provider-databricks'

const dataDatabricksSharePluginframeworkObjectPartition: dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartition.property.value">value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue">DataDatabricksSharePluginframeworkObjectPartitionValue</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/share_pluginframework#value DataDatabricksSharePluginframework#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartition.property.value"></a>

```typescript
public readonly value: IResolvable | DataDatabricksSharePluginframeworkObjectPartitionValue[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue">DataDatabricksSharePluginframeworkObjectPartitionValue</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/share_pluginframework#value DataDatabricksSharePluginframework#value}.

---

### DataDatabricksSharePluginframeworkObjectPartitionValue <a name="DataDatabricksSharePluginframeworkObjectPartitionValue" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue.Initializer"></a>

```typescript
import { dataDatabricksSharePluginframework } from '@cdktf/provider-databricks'

const dataDatabricksSharePluginframeworkObjectPartitionValue: dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/share_pluginframework#name DataDatabricksSharePluginframework#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue.property.op">op</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/share_pluginframework#op DataDatabricksSharePluginframework#op}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue.property.recipientPropertyKey">recipientPropertyKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/share_pluginframework#recipient_property_key DataDatabricksSharePluginframework#recipient_property_key}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/share_pluginframework#value DataDatabricksSharePluginframework#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/share_pluginframework#name DataDatabricksSharePluginframework#name}.

---

##### `op`<sup>Optional</sup> <a name="op" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue.property.op"></a>

```typescript
public readonly op: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/share_pluginframework#op DataDatabricksSharePluginframework#op}.

---

##### `recipientPropertyKey`<sup>Optional</sup> <a name="recipientPropertyKey" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue.property.recipientPropertyKey"></a>

```typescript
public readonly recipientPropertyKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/share_pluginframework#recipient_property_key DataDatabricksSharePluginframework#recipient_property_key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/share_pluginframework#value DataDatabricksSharePluginframework#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksSharePluginframeworkObjectList <a name="DataDatabricksSharePluginframeworkObjectList" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.Initializer"></a>

```typescript
import { dataDatabricksSharePluginframework } from '@cdktf/provider-databricks'

new dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.get"></a>

```typescript
public get(index: number): DataDatabricksSharePluginframeworkObjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject">DataDatabricksSharePluginframeworkObject</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksSharePluginframeworkObject[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject">DataDatabricksSharePluginframeworkObject</a>[]

---


### DataDatabricksSharePluginframeworkObjectOutputReference <a name="DataDatabricksSharePluginframeworkObjectOutputReference" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.Initializer"></a>

```typescript
import { dataDatabricksSharePluginframework } from '@cdktf/provider-databricks'

new dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.putPartition">putPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetCdfEnabled">resetCdfEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetDataObjectType">resetDataObjectType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetHistoryDataSharingStatus">resetHistoryDataSharingStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetPartition">resetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetSharedAs">resetSharedAs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetStartVersion">resetStartVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetStringSharedAs">resetStringSharedAs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPartition` <a name="putPartition" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.putPartition"></a>

```typescript
public putPartition(value: IResolvable | DataDatabricksSharePluginframeworkObjectPartition[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.putPartition.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartition">DataDatabricksSharePluginframeworkObjectPartition</a>[]

---

##### `resetCdfEnabled` <a name="resetCdfEnabled" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetCdfEnabled"></a>

```typescript
public resetCdfEnabled(): void
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetContent` <a name="resetContent" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetContent"></a>

```typescript
public resetContent(): void
```

##### `resetDataObjectType` <a name="resetDataObjectType" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetDataObjectType"></a>

```typescript
public resetDataObjectType(): void
```

##### `resetHistoryDataSharingStatus` <a name="resetHistoryDataSharingStatus" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetHistoryDataSharingStatus"></a>

```typescript
public resetHistoryDataSharingStatus(): void
```

##### `resetPartition` <a name="resetPartition" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetPartition"></a>

```typescript
public resetPartition(): void
```

##### `resetSharedAs` <a name="resetSharedAs" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetSharedAs"></a>

```typescript
public resetSharedAs(): void
```

##### `resetStartVersion` <a name="resetStartVersion" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetStartVersion"></a>

```typescript
public resetStartVersion(): void
```

##### `resetStringSharedAs` <a name="resetStringSharedAs" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetStringSharedAs"></a>

```typescript
public resetStringSharedAs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.addedAt">addedAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.addedBy">addedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.effectiveCdfEnabled">effectiveCdfEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.effectiveHistoryDataSharingStatus">effectiveHistoryDataSharingStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.effectiveSharedAs">effectiveSharedAs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.effectiveStartVersion">effectiveStartVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.partition">partition</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList">DataDatabricksSharePluginframeworkObjectPartitionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.cdfEnabledInput">cdfEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.dataObjectTypeInput">dataObjectTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.historyDataSharingStatusInput">historyDataSharingStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.partitionInput">partitionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartition">DataDatabricksSharePluginframeworkObjectPartition</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.sharedAsInput">sharedAsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.startVersionInput">startVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.stringSharedAsInput">stringSharedAsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.cdfEnabled">cdfEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.dataObjectType">dataObjectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.historyDataSharingStatus">historyDataSharingStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.sharedAs">sharedAs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.startVersion">startVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.stringSharedAs">stringSharedAs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject">DataDatabricksSharePluginframeworkObject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addedAt`<sup>Required</sup> <a name="addedAt" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.addedAt"></a>

```typescript
public readonly addedAt: number;
```

- *Type:* number

---

##### `addedBy`<sup>Required</sup> <a name="addedBy" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.addedBy"></a>

```typescript
public readonly addedBy: string;
```

- *Type:* string

---

##### `effectiveCdfEnabled`<sup>Required</sup> <a name="effectiveCdfEnabled" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.effectiveCdfEnabled"></a>

```typescript
public readonly effectiveCdfEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `effectiveHistoryDataSharingStatus`<sup>Required</sup> <a name="effectiveHistoryDataSharingStatus" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.effectiveHistoryDataSharingStatus"></a>

```typescript
public readonly effectiveHistoryDataSharingStatus: string;
```

- *Type:* string

---

##### `effectiveSharedAs`<sup>Required</sup> <a name="effectiveSharedAs" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.effectiveSharedAs"></a>

```typescript
public readonly effectiveSharedAs: string;
```

- *Type:* string

---

##### `effectiveStartVersion`<sup>Required</sup> <a name="effectiveStartVersion" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.effectiveStartVersion"></a>

```typescript
public readonly effectiveStartVersion: number;
```

- *Type:* number

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.partition"></a>

```typescript
public readonly partition: DataDatabricksSharePluginframeworkObjectPartitionList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList">DataDatabricksSharePluginframeworkObjectPartitionList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `cdfEnabledInput`<sup>Optional</sup> <a name="cdfEnabledInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.cdfEnabledInput"></a>

```typescript
public readonly cdfEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `dataObjectTypeInput`<sup>Optional</sup> <a name="dataObjectTypeInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.dataObjectTypeInput"></a>

```typescript
public readonly dataObjectTypeInput: string;
```

- *Type:* string

---

##### `historyDataSharingStatusInput`<sup>Optional</sup> <a name="historyDataSharingStatusInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.historyDataSharingStatusInput"></a>

```typescript
public readonly historyDataSharingStatusInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.partitionInput"></a>

```typescript
public readonly partitionInput: IResolvable | DataDatabricksSharePluginframeworkObjectPartition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartition">DataDatabricksSharePluginframeworkObjectPartition</a>[]

---

##### `sharedAsInput`<sup>Optional</sup> <a name="sharedAsInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.sharedAsInput"></a>

```typescript
public readonly sharedAsInput: string;
```

- *Type:* string

---

##### `startVersionInput`<sup>Optional</sup> <a name="startVersionInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.startVersionInput"></a>

```typescript
public readonly startVersionInput: number;
```

- *Type:* number

---

##### `stringSharedAsInput`<sup>Optional</sup> <a name="stringSharedAsInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.stringSharedAsInput"></a>

```typescript
public readonly stringSharedAsInput: string;
```

- *Type:* string

---

##### `cdfEnabled`<sup>Required</sup> <a name="cdfEnabled" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.cdfEnabled"></a>

```typescript
public readonly cdfEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `dataObjectType`<sup>Required</sup> <a name="dataObjectType" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.dataObjectType"></a>

```typescript
public readonly dataObjectType: string;
```

- *Type:* string

---

##### `historyDataSharingStatus`<sup>Required</sup> <a name="historyDataSharingStatus" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.historyDataSharingStatus"></a>

```typescript
public readonly historyDataSharingStatus: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sharedAs`<sup>Required</sup> <a name="sharedAs" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.sharedAs"></a>

```typescript
public readonly sharedAs: string;
```

- *Type:* string

---

##### `startVersion`<sup>Required</sup> <a name="startVersion" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.startVersion"></a>

```typescript
public readonly startVersion: number;
```

- *Type:* number

---

##### `stringSharedAs`<sup>Required</sup> <a name="stringSharedAs" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.stringSharedAs"></a>

```typescript
public readonly stringSharedAs: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksSharePluginframeworkObject;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject">DataDatabricksSharePluginframeworkObject</a>

---


### DataDatabricksSharePluginframeworkObjectPartitionList <a name="DataDatabricksSharePluginframeworkObjectPartitionList" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.Initializer"></a>

```typescript
import { dataDatabricksSharePluginframework } from '@cdktf/provider-databricks'

new dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.get"></a>

```typescript
public get(index: number): DataDatabricksSharePluginframeworkObjectPartitionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartition">DataDatabricksSharePluginframeworkObjectPartition</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksSharePluginframeworkObjectPartition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartition">DataDatabricksSharePluginframeworkObjectPartition</a>[]

---


### DataDatabricksSharePluginframeworkObjectPartitionOutputReference <a name="DataDatabricksSharePluginframeworkObjectPartitionOutputReference" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.Initializer"></a>

```typescript
import { dataDatabricksSharePluginframework } from '@cdktf/provider-databricks'

new dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.putValue">putValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValue` <a name="putValue" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.putValue"></a>

```typescript
public putValue(value: IResolvable | DataDatabricksSharePluginframeworkObjectPartitionValue[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.putValue.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue">DataDatabricksSharePluginframeworkObjectPartitionValue</a>[]

---

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.property.value">value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList">DataDatabricksSharePluginframeworkObjectPartitionValueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.property.valueInput">valueInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue">DataDatabricksSharePluginframeworkObjectPartitionValue</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartition">DataDatabricksSharePluginframeworkObjectPartition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.property.value"></a>

```typescript
public readonly value: DataDatabricksSharePluginframeworkObjectPartitionValueList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList">DataDatabricksSharePluginframeworkObjectPartitionValueList</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: IResolvable | DataDatabricksSharePluginframeworkObjectPartitionValue[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue">DataDatabricksSharePluginframeworkObjectPartitionValue</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksSharePluginframeworkObjectPartition;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartition">DataDatabricksSharePluginframeworkObjectPartition</a>

---


### DataDatabricksSharePluginframeworkObjectPartitionValueList <a name="DataDatabricksSharePluginframeworkObjectPartitionValueList" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.Initializer"></a>

```typescript
import { dataDatabricksSharePluginframework } from '@cdktf/provider-databricks'

new dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.get"></a>

```typescript
public get(index: number): DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue">DataDatabricksSharePluginframeworkObjectPartitionValue</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksSharePluginframeworkObjectPartitionValue[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue">DataDatabricksSharePluginframeworkObjectPartitionValue</a>[]

---


### DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference <a name="DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.Initializer"></a>

```typescript
import { dataDatabricksSharePluginframework } from '@cdktf/provider-databricks'

new dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.resetOp">resetOp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.resetRecipientPropertyKey">resetRecipientPropertyKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOp` <a name="resetOp" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.resetOp"></a>

```typescript
public resetOp(): void
```

##### `resetRecipientPropertyKey` <a name="resetRecipientPropertyKey" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.resetRecipientPropertyKey"></a>

```typescript
public resetRecipientPropertyKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.opInput">opInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.recipientPropertyKeyInput">recipientPropertyKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.op">op</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.recipientPropertyKey">recipientPropertyKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue">DataDatabricksSharePluginframeworkObjectPartitionValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `opInput`<sup>Optional</sup> <a name="opInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.opInput"></a>

```typescript
public readonly opInput: string;
```

- *Type:* string

---

##### `recipientPropertyKeyInput`<sup>Optional</sup> <a name="recipientPropertyKeyInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.recipientPropertyKeyInput"></a>

```typescript
public readonly recipientPropertyKeyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `op`<sup>Required</sup> <a name="op" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.op"></a>

```typescript
public readonly op: string;
```

- *Type:* string

---

##### `recipientPropertyKey`<sup>Required</sup> <a name="recipientPropertyKey" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.recipientPropertyKey"></a>

```typescript
public readonly recipientPropertyKey: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksSharePluginframeworkObjectPartitionValue;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue">DataDatabricksSharePluginframeworkObjectPartitionValue</a>

---



