# `dataDatabricksMwsWorkspaces` Submodule <a name="`dataDatabricksMwsWorkspaces` Submodule" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksMwsWorkspaces <a name="DataDatabricksMwsWorkspaces" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/mws_workspaces databricks_mws_workspaces}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.Initializer"></a>

```typescript
import { dataDatabricksMwsWorkspaces } from '@cdktf/provider-databricks'

new dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces(scope: Construct, id: string, config?: DataDatabricksMwsWorkspacesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspacesConfig">DataDatabricksMwsWorkspacesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspacesConfig">DataDatabricksMwsWorkspacesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.resetIds">resetIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIds` <a name="resetIds" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.resetIds"></a>

```typescript
public resetIds(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksMwsWorkspaces resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.isConstruct"></a>

```typescript
import { dataDatabricksMwsWorkspaces } from '@cdktf/provider-databricks'

dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.isTerraformElement"></a>

```typescript
import { dataDatabricksMwsWorkspaces } from '@cdktf/provider-databricks'

dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.isTerraformDataSource"></a>

```typescript
import { dataDatabricksMwsWorkspaces } from '@cdktf/provider-databricks'

dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.generateConfigForImport"></a>

```typescript
import { dataDatabricksMwsWorkspaces } from '@cdktf/provider-databricks'

dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatabricksMwsWorkspaces resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksMwsWorkspaces to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksMwsWorkspaces that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/mws_workspaces#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksMwsWorkspaces to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.idsInput">idsInput</a></code> | <code>{[ key: string ]: number}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.ids">ids</a></code> | <code>{[ key: string ]: number}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `idsInput`<sup>Optional</sup> <a name="idsInput" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.idsInput"></a>

```typescript
public readonly idsInput: {[ key: string ]: number};
```

- *Type:* {[ key: string ]: number}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ids`<sup>Required</sup> <a name="ids" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.ids"></a>

```typescript
public readonly ids: {[ key: string ]: number};
```

- *Type:* {[ key: string ]: number}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksMwsWorkspacesConfig <a name="DataDatabricksMwsWorkspacesConfig" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspacesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspacesConfig.Initializer"></a>

```typescript
import { dataDatabricksMwsWorkspaces } from '@cdktf/provider-databricks'

const dataDatabricksMwsWorkspacesConfig: dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspacesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspacesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspacesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspacesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspacesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspacesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspacesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspacesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspacesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/mws_workspaces#id DataDatabricksMwsWorkspaces#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspacesConfig.property.ids">ids</a></code> | <code>{[ key: string ]: number}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/mws_workspaces#ids DataDatabricksMwsWorkspaces#ids}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspacesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspacesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspacesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspacesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspacesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspacesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspacesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspacesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/mws_workspaces#id DataDatabricksMwsWorkspaces#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ids`<sup>Optional</sup> <a name="ids" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspacesConfig.property.ids"></a>

```typescript
public readonly ids: {[ key: string ]: number};
```

- *Type:* {[ key: string ]: number}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/data-sources/mws_workspaces#ids DataDatabricksMwsWorkspaces#ids}.

---



