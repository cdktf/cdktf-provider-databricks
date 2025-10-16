# `dataDatabricksNotebookPaths` Submodule <a name="`dataDatabricksNotebookPaths` Submodule" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksNotebookPaths <a name="DataDatabricksNotebookPaths" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/notebook_paths databricks_notebook_paths}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.Initializer"></a>

```typescript
import { dataDatabricksNotebookPaths } from '@cdktf/provider-databricks'

new dataDatabricksNotebookPaths.DataDatabricksNotebookPaths(scope: Construct, id: string, config: DataDatabricksNotebookPathsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig">DataDatabricksNotebookPathsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig">DataDatabricksNotebookPathsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksNotebookPaths resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.isConstruct"></a>

```typescript
import { dataDatabricksNotebookPaths } from '@cdktf/provider-databricks'

dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.isTerraformElement"></a>

```typescript
import { dataDatabricksNotebookPaths } from '@cdktf/provider-databricks'

dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.isTerraformDataSource"></a>

```typescript
import { dataDatabricksNotebookPaths } from '@cdktf/provider-databricks'

dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.generateConfigForImport"></a>

```typescript
import { dataDatabricksNotebookPaths } from '@cdktf/provider-databricks'

dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatabricksNotebookPaths resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksNotebookPaths to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksNotebookPaths that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/notebook_paths#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksNotebookPaths to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.notebookPathList">notebookPathList</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList">DataDatabricksNotebookPathsNotebookPathListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.recursiveInput">recursiveInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.recursive">recursive</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `notebookPathList`<sup>Required</sup> <a name="notebookPathList" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.notebookPathList"></a>

```typescript
public readonly notebookPathList: DataDatabricksNotebookPathsNotebookPathListStructList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList">DataDatabricksNotebookPathsNotebookPathListStructList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `recursiveInput`<sup>Optional</sup> <a name="recursiveInput" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.recursiveInput"></a>

```typescript
public readonly recursiveInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `recursive`<sup>Required</sup> <a name="recursive" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.recursive"></a>

```typescript
public readonly recursive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPaths.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksNotebookPathsConfig <a name="DataDatabricksNotebookPathsConfig" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.Initializer"></a>

```typescript
import { dataDatabricksNotebookPaths } from '@cdktf/provider-databricks'

const dataDatabricksNotebookPathsConfig: dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/notebook_paths#path DataDatabricksNotebookPaths#path}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.recursive">recursive</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/notebook_paths#recursive DataDatabricksNotebookPaths#recursive}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/notebook_paths#id DataDatabricksNotebookPaths#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/notebook_paths#path DataDatabricksNotebookPaths#path}.

---

##### `recursive`<sup>Required</sup> <a name="recursive" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.recursive"></a>

```typescript
public readonly recursive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/notebook_paths#recursive DataDatabricksNotebookPaths#recursive}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/notebook_paths#id DataDatabricksNotebookPaths#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataDatabricksNotebookPathsNotebookPathListStruct <a name="DataDatabricksNotebookPathsNotebookPathListStruct" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStruct.Initializer"></a>

```typescript
import { dataDatabricksNotebookPaths } from '@cdktf/provider-databricks'

const dataDatabricksNotebookPathsNotebookPathListStruct: dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStruct = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksNotebookPathsNotebookPathListStructList <a name="DataDatabricksNotebookPathsNotebookPathListStructList" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList.Initializer"></a>

```typescript
import { dataDatabricksNotebookPaths } from '@cdktf/provider-databricks'

new dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList.get"></a>

```typescript
public get(index: number): DataDatabricksNotebookPathsNotebookPathListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDatabricksNotebookPathsNotebookPathListStructOutputReference <a name="DataDatabricksNotebookPathsNotebookPathListStructOutputReference" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.Initializer"></a>

```typescript
import { dataDatabricksNotebookPaths } from '@cdktf/provider-databricks'

new dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.property.language">language</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStruct">DataDatabricksNotebookPathsNotebookPathListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.property.language"></a>

```typescript
public readonly language: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksNotebookPathsNotebookPathListStruct;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksNotebookPaths.DataDatabricksNotebookPathsNotebookPathListStruct">DataDatabricksNotebookPathsNotebookPathListStruct</a>

---



