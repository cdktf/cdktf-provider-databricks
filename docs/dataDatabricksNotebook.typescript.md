# `dataDatabricksNotebook` Submodule <a name="`dataDatabricksNotebook` Submodule" id="@cdktf/provider-databricks.dataDatabricksNotebook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksNotebook <a name="DataDatabricksNotebook" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/notebook databricks_notebook}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.Initializer"></a>

```typescript
import { dataDatabricksNotebook } from '@cdktf/provider-databricks'

new dataDatabricksNotebook.DataDatabricksNotebook(scope: Construct, id: string, config: DataDatabricksNotebookConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebookConfig">DataDatabricksNotebookConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebookConfig">DataDatabricksNotebookConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.resetLanguage">resetLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.resetObjectId">resetObjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.resetObjectType">resetObjectType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLanguage` <a name="resetLanguage" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.resetLanguage"></a>

```typescript
public resetLanguage(): void
```

##### `resetObjectId` <a name="resetObjectId" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.resetObjectId"></a>

```typescript
public resetObjectId(): void
```

##### `resetObjectType` <a name="resetObjectType" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.resetObjectType"></a>

```typescript
public resetObjectType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksNotebook resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.isConstruct"></a>

```typescript
import { dataDatabricksNotebook } from '@cdktf/provider-databricks'

dataDatabricksNotebook.DataDatabricksNotebook.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.isTerraformElement"></a>

```typescript
import { dataDatabricksNotebook } from '@cdktf/provider-databricks'

dataDatabricksNotebook.DataDatabricksNotebook.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.isTerraformDataSource"></a>

```typescript
import { dataDatabricksNotebook } from '@cdktf/provider-databricks'

dataDatabricksNotebook.DataDatabricksNotebook.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.generateConfigForImport"></a>

```typescript
import { dataDatabricksNotebook } from '@cdktf/provider-databricks'

dataDatabricksNotebook.DataDatabricksNotebook.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatabricksNotebook resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksNotebook to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksNotebook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/notebook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksNotebook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.workspacePath">workspacePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.formatInput">formatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.languageInput">languageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.objectIdInput">objectIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.objectTypeInput">objectTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.language">language</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.objectId">objectId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.objectType">objectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.path">path</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `workspacePath`<sup>Required</sup> <a name="workspacePath" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.workspacePath"></a>

```typescript
public readonly workspacePath: string;
```

- *Type:* string

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.formatInput"></a>

```typescript
public readonly formatInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `languageInput`<sup>Optional</sup> <a name="languageInput" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.languageInput"></a>

```typescript
public readonly languageInput: string;
```

- *Type:* string

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.objectIdInput"></a>

```typescript
public readonly objectIdInput: number;
```

- *Type:* number

---

##### `objectTypeInput`<sup>Optional</sup> <a name="objectTypeInput" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.objectTypeInput"></a>

```typescript
public readonly objectTypeInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.language"></a>

```typescript
public readonly language: string;
```

- *Type:* string

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.objectId"></a>

```typescript
public readonly objectId: number;
```

- *Type:* number

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebook.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksNotebookConfig <a name="DataDatabricksNotebookConfig" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebookConfig.Initializer"></a>

```typescript
import { dataDatabricksNotebook } from '@cdktf/provider-databricks'

const dataDatabricksNotebookConfig: dataDatabricksNotebook.DataDatabricksNotebookConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebookConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebookConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebookConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebookConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebookConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebookConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebookConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebookConfig.property.format">format</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/notebook#format DataDatabricksNotebook#format}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebookConfig.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/notebook#path DataDatabricksNotebook#path}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebookConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/notebook#id DataDatabricksNotebook#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebookConfig.property.language">language</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/notebook#language DataDatabricksNotebook#language}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebookConfig.property.objectId">objectId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/notebook#object_id DataDatabricksNotebook#object_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebookConfig.property.objectType">objectType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/notebook#object_type DataDatabricksNotebook#object_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebookConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebookConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebookConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebookConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebookConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebookConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebookConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebookConfig.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/notebook#format DataDatabricksNotebook#format}.

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebookConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/notebook#path DataDatabricksNotebook#path}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebookConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/notebook#id DataDatabricksNotebook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `language`<sup>Optional</sup> <a name="language" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebookConfig.property.language"></a>

```typescript
public readonly language: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/notebook#language DataDatabricksNotebook#language}.

---

##### `objectId`<sup>Optional</sup> <a name="objectId" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebookConfig.property.objectId"></a>

```typescript
public readonly objectId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/notebook#object_id DataDatabricksNotebook#object_id}.

---

##### `objectType`<sup>Optional</sup> <a name="objectType" id="@cdktf/provider-databricks.dataDatabricksNotebook.DataDatabricksNotebookConfig.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/notebook#object_type DataDatabricksNotebook#object_type}.

---



