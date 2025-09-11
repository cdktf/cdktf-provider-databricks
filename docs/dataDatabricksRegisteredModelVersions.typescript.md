# `dataDatabricksRegisteredModelVersions` Submodule <a name="`dataDatabricksRegisteredModelVersions` Submodule" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksRegisteredModelVersions <a name="DataDatabricksRegisteredModelVersions" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions databricks_registered_model_versions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.Initializer"></a>

```typescript
import { dataDatabricksRegisteredModelVersions } from '@cdktf/provider-databricks'

new dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions(scope: Construct, id: string, config: DataDatabricksRegisteredModelVersionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig">DataDatabricksRegisteredModelVersionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig">DataDatabricksRegisteredModelVersionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.putModelVersions">putModelVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.resetModelVersions">resetModelVersions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putModelVersions` <a name="putModelVersions" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.putModelVersions"></a>

```typescript
public putModelVersions(value: IResolvable | DataDatabricksRegisteredModelVersionsModelVersions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.putModelVersions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions">DataDatabricksRegisteredModelVersionsModelVersions</a>[]

---

##### `resetModelVersions` <a name="resetModelVersions" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.resetModelVersions"></a>

```typescript
public resetModelVersions(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksRegisteredModelVersions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.isConstruct"></a>

```typescript
import { dataDatabricksRegisteredModelVersions } from '@cdktf/provider-databricks'

dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.isTerraformElement"></a>

```typescript
import { dataDatabricksRegisteredModelVersions } from '@cdktf/provider-databricks'

dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.isTerraformDataSource"></a>

```typescript
import { dataDatabricksRegisteredModelVersions } from '@cdktf/provider-databricks'

dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.generateConfigForImport"></a>

```typescript
import { dataDatabricksRegisteredModelVersions } from '@cdktf/provider-databricks'

dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatabricksRegisteredModelVersions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksRegisteredModelVersions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksRegisteredModelVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksRegisteredModelVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.modelVersions">modelVersions</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList">DataDatabricksRegisteredModelVersionsModelVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.fullNameInput">fullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.modelVersionsInput">modelVersionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions">DataDatabricksRegisteredModelVersionsModelVersions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.fullName">fullName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `modelVersions`<sup>Required</sup> <a name="modelVersions" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.modelVersions"></a>

```typescript
public readonly modelVersions: DataDatabricksRegisteredModelVersionsModelVersionsList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList">DataDatabricksRegisteredModelVersionsModelVersionsList</a>

---

##### `fullNameInput`<sup>Optional</sup> <a name="fullNameInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.fullNameInput"></a>

```typescript
public readonly fullNameInput: string;
```

- *Type:* string

---

##### `modelVersionsInput`<sup>Optional</sup> <a name="modelVersionsInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.modelVersionsInput"></a>

```typescript
public readonly modelVersionsInput: IResolvable | DataDatabricksRegisteredModelVersionsModelVersions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions">DataDatabricksRegisteredModelVersionsModelVersions</a>[]

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.fullName"></a>

```typescript
public readonly fullName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksRegisteredModelVersionsConfig <a name="DataDatabricksRegisteredModelVersionsConfig" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.Initializer"></a>

```typescript
import { dataDatabricksRegisteredModelVersions } from '@cdktf/provider-databricks'

const dataDatabricksRegisteredModelVersionsConfig: dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.fullName">fullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#full_name DataDatabricksRegisteredModelVersions#full_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.modelVersions">modelVersions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions">DataDatabricksRegisteredModelVersionsModelVersions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#model_versions DataDatabricksRegisteredModelVersions#model_versions}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.fullName"></a>

```typescript
public readonly fullName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#full_name DataDatabricksRegisteredModelVersions#full_name}.

---

##### `modelVersions`<sup>Optional</sup> <a name="modelVersions" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.modelVersions"></a>

```typescript
public readonly modelVersions: IResolvable | DataDatabricksRegisteredModelVersionsModelVersions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions">DataDatabricksRegisteredModelVersionsModelVersions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#model_versions DataDatabricksRegisteredModelVersions#model_versions}.

---

### DataDatabricksRegisteredModelVersionsModelVersions <a name="DataDatabricksRegisteredModelVersionsModelVersions" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.Initializer"></a>

```typescript
import { dataDatabricksRegisteredModelVersions } from '@cdktf/provider-databricks'

const dataDatabricksRegisteredModelVersionsModelVersions: dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.aliases">aliases</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases">DataDatabricksRegisteredModelVersionsModelVersionsAliases</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#aliases DataDatabricksRegisteredModelVersions#aliases}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.browseOnly">browseOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#browse_only DataDatabricksRegisteredModelVersions#browse_only}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.catalogName">catalogName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#catalog_name DataDatabricksRegisteredModelVersions#catalog_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.comment">comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#comment DataDatabricksRegisteredModelVersions#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.createdAt">createdAt</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#created_at DataDatabricksRegisteredModelVersions#created_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.createdBy">createdBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#created_by DataDatabricksRegisteredModelVersions#created_by}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#id DataDatabricksRegisteredModelVersions#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.metastoreId">metastoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#metastore_id DataDatabricksRegisteredModelVersions#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.modelName">modelName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#model_name DataDatabricksRegisteredModelVersions#model_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.modelVersionDependencies">modelVersionDependencies</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#model_version_dependencies DataDatabricksRegisteredModelVersions#model_version_dependencies}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.runId">runId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#run_id DataDatabricksRegisteredModelVersions#run_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.runWorkspaceId">runWorkspaceId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#run_workspace_id DataDatabricksRegisteredModelVersions#run_workspace_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.schemaName">schemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#schema_name DataDatabricksRegisteredModelVersions#schema_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#source DataDatabricksRegisteredModelVersions#source}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#status DataDatabricksRegisteredModelVersions#status}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.storageLocation">storageLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#storage_location DataDatabricksRegisteredModelVersions#storage_location}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.updatedAt">updatedAt</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#updated_at DataDatabricksRegisteredModelVersions#updated_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.updatedBy">updatedBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#updated_by DataDatabricksRegisteredModelVersions#updated_by}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.version">version</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#version DataDatabricksRegisteredModelVersions#version}. |

---

##### `aliases`<sup>Optional</sup> <a name="aliases" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.aliases"></a>

```typescript
public readonly aliases: IResolvable | DataDatabricksRegisteredModelVersionsModelVersionsAliases[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases">DataDatabricksRegisteredModelVersionsModelVersionsAliases</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#aliases DataDatabricksRegisteredModelVersions#aliases}.

---

##### `browseOnly`<sup>Optional</sup> <a name="browseOnly" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.browseOnly"></a>

```typescript
public readonly browseOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#browse_only DataDatabricksRegisteredModelVersions#browse_only}.

---

##### `catalogName`<sup>Optional</sup> <a name="catalogName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#catalog_name DataDatabricksRegisteredModelVersions#catalog_name}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#comment DataDatabricksRegisteredModelVersions#comment}.

---

##### `createdAt`<sup>Optional</sup> <a name="createdAt" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.createdAt"></a>

```typescript
public readonly createdAt: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#created_at DataDatabricksRegisteredModelVersions#created_at}.

---

##### `createdBy`<sup>Optional</sup> <a name="createdBy" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#created_by DataDatabricksRegisteredModelVersions#created_by}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#id DataDatabricksRegisteredModelVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metastoreId`<sup>Optional</sup> <a name="metastoreId" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.metastoreId"></a>

```typescript
public readonly metastoreId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#metastore_id DataDatabricksRegisteredModelVersions#metastore_id}.

---

##### `modelName`<sup>Optional</sup> <a name="modelName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.modelName"></a>

```typescript
public readonly modelName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#model_name DataDatabricksRegisteredModelVersions#model_name}.

---

##### `modelVersionDependencies`<sup>Optional</sup> <a name="modelVersionDependencies" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.modelVersionDependencies"></a>

```typescript
public readonly modelVersionDependencies: IResolvable | DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#model_version_dependencies DataDatabricksRegisteredModelVersions#model_version_dependencies}.

---

##### `runId`<sup>Optional</sup> <a name="runId" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.runId"></a>

```typescript
public readonly runId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#run_id DataDatabricksRegisteredModelVersions#run_id}.

---

##### `runWorkspaceId`<sup>Optional</sup> <a name="runWorkspaceId" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.runWorkspaceId"></a>

```typescript
public readonly runWorkspaceId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#run_workspace_id DataDatabricksRegisteredModelVersions#run_workspace_id}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#schema_name DataDatabricksRegisteredModelVersions#schema_name}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#source DataDatabricksRegisteredModelVersions#source}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#status DataDatabricksRegisteredModelVersions#status}.

---

##### `storageLocation`<sup>Optional</sup> <a name="storageLocation" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.storageLocation"></a>

```typescript
public readonly storageLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#storage_location DataDatabricksRegisteredModelVersions#storage_location}.

---

##### `updatedAt`<sup>Optional</sup> <a name="updatedAt" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.updatedAt"></a>

```typescript
public readonly updatedAt: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#updated_at DataDatabricksRegisteredModelVersions#updated_at}.

---

##### `updatedBy`<sup>Optional</sup> <a name="updatedBy" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.updatedBy"></a>

```typescript
public readonly updatedBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#updated_by DataDatabricksRegisteredModelVersions#updated_by}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#version DataDatabricksRegisteredModelVersions#version}.

---

### DataDatabricksRegisteredModelVersionsModelVersionsAliases <a name="DataDatabricksRegisteredModelVersionsModelVersionsAliases" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases.Initializer"></a>

```typescript
import { dataDatabricksRegisteredModelVersions } from '@cdktf/provider-databricks'

const dataDatabricksRegisteredModelVersionsModelVersionsAliases: dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases.property.aliasName">aliasName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#alias_name DataDatabricksRegisteredModelVersions#alias_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases.property.versionNum">versionNum</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#version_num DataDatabricksRegisteredModelVersions#version_num}. |

---

##### `aliasName`<sup>Optional</sup> <a name="aliasName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases.property.aliasName"></a>

```typescript
public readonly aliasName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#alias_name DataDatabricksRegisteredModelVersions#alias_name}.

---

##### `versionNum`<sup>Optional</sup> <a name="versionNum" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases.property.versionNum"></a>

```typescript
public readonly versionNum: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#version_num DataDatabricksRegisteredModelVersions#version_num}.

---

### DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies <a name="DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies.Initializer"></a>

```typescript
import { dataDatabricksRegisteredModelVersions } from '@cdktf/provider-databricks'

const dataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies: dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies.property.dependencies">dependencies</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#dependencies DataDatabricksRegisteredModelVersions#dependencies}. |

---

##### `dependencies`<sup>Optional</sup> <a name="dependencies" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies.property.dependencies"></a>

```typescript
public readonly dependencies: IResolvable | DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#dependencies DataDatabricksRegisteredModelVersions#dependencies}.

---

### DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies <a name="DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies.Initializer"></a>

```typescript
import { dataDatabricksRegisteredModelVersions } from '@cdktf/provider-databricks'

const dataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies: dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies.property.connection">connection</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#connection DataDatabricksRegisteredModelVersions#connection}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies.property.credential">credential</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#credential DataDatabricksRegisteredModelVersions#credential}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies.property.function">function</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#function DataDatabricksRegisteredModelVersions#function}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies.property.table">table</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#table DataDatabricksRegisteredModelVersions#table}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies.property.connection"></a>

```typescript
public readonly connection: IResolvable | DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#connection DataDatabricksRegisteredModelVersions#connection}.

---

##### `credential`<sup>Optional</sup> <a name="credential" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies.property.credential"></a>

```typescript
public readonly credential: IResolvable | DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#credential DataDatabricksRegisteredModelVersions#credential}.

---

##### `function`<sup>Optional</sup> <a name="function" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies.property.function"></a>

```typescript
public readonly function: IResolvable | DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#function DataDatabricksRegisteredModelVersions#function}.

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies.property.table"></a>

```typescript
public readonly table: IResolvable | DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#table DataDatabricksRegisteredModelVersions#table}.

---

### DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection <a name="DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection.Initializer"></a>

```typescript
import { dataDatabricksRegisteredModelVersions } from '@cdktf/provider-databricks'

const dataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection: dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection.property.connectionName">connectionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#connection_name DataDatabricksRegisteredModelVersions#connection_name}. |

---

##### `connectionName`<sup>Optional</sup> <a name="connectionName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#connection_name DataDatabricksRegisteredModelVersions#connection_name}.

---

### DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential <a name="DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential.Initializer"></a>

```typescript
import { dataDatabricksRegisteredModelVersions } from '@cdktf/provider-databricks'

const dataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential: dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential.property.credentialName">credentialName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#credential_name DataDatabricksRegisteredModelVersions#credential_name}. |

---

##### `credentialName`<sup>Optional</sup> <a name="credentialName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential.property.credentialName"></a>

```typescript
public readonly credentialName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#credential_name DataDatabricksRegisteredModelVersions#credential_name}.

---

### DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction <a name="DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction.Initializer"></a>

```typescript
import { dataDatabricksRegisteredModelVersions } from '@cdktf/provider-databricks'

const dataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction: dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction.property.functionFullName">functionFullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#function_full_name DataDatabricksRegisteredModelVersions#function_full_name}. |

---

##### `functionFullName`<sup>Required</sup> <a name="functionFullName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction.property.functionFullName"></a>

```typescript
public readonly functionFullName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#function_full_name DataDatabricksRegisteredModelVersions#function_full_name}.

---

### DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable <a name="DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable.Initializer"></a>

```typescript
import { dataDatabricksRegisteredModelVersions } from '@cdktf/provider-databricks'

const dataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable: dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable.property.tableFullName">tableFullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#table_full_name DataDatabricksRegisteredModelVersions#table_full_name}. |

---

##### `tableFullName`<sup>Required</sup> <a name="tableFullName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable.property.tableFullName"></a>

```typescript
public readonly tableFullName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/registered_model_versions#table_full_name DataDatabricksRegisteredModelVersions#table_full_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksRegisteredModelVersionsModelVersionsAliasesList <a name="DataDatabricksRegisteredModelVersionsModelVersionsAliasesList" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.Initializer"></a>

```typescript
import { dataDatabricksRegisteredModelVersions } from '@cdktf/provider-databricks'

new dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.get"></a>

```typescript
public get(index: number): DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases">DataDatabricksRegisteredModelVersionsModelVersionsAliases</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksRegisteredModelVersionsModelVersionsAliases[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases">DataDatabricksRegisteredModelVersionsModelVersionsAliases</a>[]

---


### DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference <a name="DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.Initializer"></a>

```typescript
import { dataDatabricksRegisteredModelVersions } from '@cdktf/provider-databricks'

new dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.resetAliasName">resetAliasName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.resetVersionNum">resetVersionNum</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAliasName` <a name="resetAliasName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.resetAliasName"></a>

```typescript
public resetAliasName(): void
```

##### `resetVersionNum` <a name="resetVersionNum" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.resetVersionNum"></a>

```typescript
public resetVersionNum(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.aliasNameInput">aliasNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.versionNumInput">versionNumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.aliasName">aliasName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.versionNum">versionNum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases">DataDatabricksRegisteredModelVersionsModelVersionsAliases</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aliasNameInput`<sup>Optional</sup> <a name="aliasNameInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.aliasNameInput"></a>

```typescript
public readonly aliasNameInput: string;
```

- *Type:* string

---

##### `versionNumInput`<sup>Optional</sup> <a name="versionNumInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.versionNumInput"></a>

```typescript
public readonly versionNumInput: number;
```

- *Type:* number

---

##### `aliasName`<sup>Required</sup> <a name="aliasName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.aliasName"></a>

```typescript
public readonly aliasName: string;
```

- *Type:* string

---

##### `versionNum`<sup>Required</sup> <a name="versionNum" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.versionNum"></a>

```typescript
public readonly versionNum: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksRegisteredModelVersionsModelVersionsAliases;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases">DataDatabricksRegisteredModelVersionsModelVersionsAliases</a>

---


### DataDatabricksRegisteredModelVersionsModelVersionsList <a name="DataDatabricksRegisteredModelVersionsModelVersionsList" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.Initializer"></a>

```typescript
import { dataDatabricksRegisteredModelVersions } from '@cdktf/provider-databricks'

new dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.get"></a>

```typescript
public get(index: number): DataDatabricksRegisteredModelVersionsModelVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions">DataDatabricksRegisteredModelVersionsModelVersions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksRegisteredModelVersionsModelVersions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions">DataDatabricksRegisteredModelVersionsModelVersions</a>[]

---


### DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList <a name="DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList.Initializer"></a>

```typescript
import { dataDatabricksRegisteredModelVersions } from '@cdktf/provider-databricks'

new dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList.get"></a>

```typescript
public get(index: number): DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection</a>[]

---


### DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference <a name="DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.Initializer"></a>

```typescript
import { dataDatabricksRegisteredModelVersions } from '@cdktf/provider-databricks'

new dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.resetConnectionName">resetConnectionName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionName` <a name="resetConnectionName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.resetConnectionName"></a>

```typescript
public resetConnectionName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.property.connectionNameInput">connectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.property.connectionName">connectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionNameInput`<sup>Optional</sup> <a name="connectionNameInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.property.connectionNameInput"></a>

```typescript
public readonly connectionNameInput: string;
```

- *Type:* string

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection</a>

---


### DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList <a name="DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList.Initializer"></a>

```typescript
import { dataDatabricksRegisteredModelVersions } from '@cdktf/provider-databricks'

new dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList.get"></a>

```typescript
public get(index: number): DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential</a>[]

---


### DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference <a name="DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.Initializer"></a>

```typescript
import { dataDatabricksRegisteredModelVersions } from '@cdktf/provider-databricks'

new dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.resetCredentialName">resetCredentialName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCredentialName` <a name="resetCredentialName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.resetCredentialName"></a>

```typescript
public resetCredentialName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.property.credentialNameInput">credentialNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.property.credentialName">credentialName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credentialNameInput`<sup>Optional</sup> <a name="credentialNameInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.property.credentialNameInput"></a>

```typescript
public readonly credentialNameInput: string;
```

- *Type:* string

---

##### `credentialName`<sup>Required</sup> <a name="credentialName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.property.credentialName"></a>

```typescript
public readonly credentialName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential</a>

---


### DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList <a name="DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.Initializer"></a>

```typescript
import { dataDatabricksRegisteredModelVersions } from '@cdktf/provider-databricks'

new dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.get"></a>

```typescript
public get(index: number): DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction</a>[]

---


### DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference <a name="DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.Initializer"></a>

```typescript
import { dataDatabricksRegisteredModelVersions } from '@cdktf/provider-databricks'

new dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.property.functionFullNameInput">functionFullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.property.functionFullName">functionFullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `functionFullNameInput`<sup>Optional</sup> <a name="functionFullNameInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.property.functionFullNameInput"></a>

```typescript
public readonly functionFullNameInput: string;
```

- *Type:* string

---

##### `functionFullName`<sup>Required</sup> <a name="functionFullName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.property.functionFullName"></a>

```typescript
public readonly functionFullName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction</a>

---


### DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList <a name="DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.Initializer"></a>

```typescript
import { dataDatabricksRegisteredModelVersions } from '@cdktf/provider-databricks'

new dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.get"></a>

```typescript
public get(index: number): DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies</a>[]

---


### DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference <a name="DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.Initializer"></a>

```typescript
import { dataDatabricksRegisteredModelVersions } from '@cdktf/provider-databricks'

new dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.putConnection">putConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.putCredential">putCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.putFunction">putFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.putTable">putTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.resetConnection">resetConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.resetCredential">resetCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.resetFunction">resetFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.resetTable">resetTable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConnection` <a name="putConnection" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.putConnection"></a>

```typescript
public putConnection(value: IResolvable | DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.putConnection.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection</a>[]

---

##### `putCredential` <a name="putCredential" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.putCredential"></a>

```typescript
public putCredential(value: IResolvable | DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.putCredential.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential</a>[]

---

##### `putFunction` <a name="putFunction" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.putFunction"></a>

```typescript
public putFunction(value: IResolvable | DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.putFunction.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction</a>[]

---

##### `putTable` <a name="putTable" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.putTable"></a>

```typescript
public putTable(value: IResolvable | DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.putTable.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable</a>[]

---

##### `resetConnection` <a name="resetConnection" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.resetConnection"></a>

```typescript
public resetConnection(): void
```

##### `resetCredential` <a name="resetCredential" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.resetCredential"></a>

```typescript
public resetCredential(): void
```

##### `resetFunction` <a name="resetFunction" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.resetFunction"></a>

```typescript
public resetFunction(): void
```

##### `resetTable` <a name="resetTable" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.resetTable"></a>

```typescript
public resetTable(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.connection">connection</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.credential">credential</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.function">function</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.table">table</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.connectionInput">connectionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.credentialInput">credentialInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.functionInput">functionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.tableInput">tableInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connection`<sup>Required</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.connection"></a>

```typescript
public readonly connection: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList</a>

---

##### `credential`<sup>Required</sup> <a name="credential" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.credential"></a>

```typescript
public readonly credential: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList</a>

---

##### `function`<sup>Required</sup> <a name="function" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.function"></a>

```typescript
public readonly function: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList</a>

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.table"></a>

```typescript
public readonly table: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList</a>

---

##### `connectionInput`<sup>Optional</sup> <a name="connectionInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.connectionInput"></a>

```typescript
public readonly connectionInput: IResolvable | DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection</a>[]

---

##### `credentialInput`<sup>Optional</sup> <a name="credentialInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.credentialInput"></a>

```typescript
public readonly credentialInput: IResolvable | DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential</a>[]

---

##### `functionInput`<sup>Optional</sup> <a name="functionInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.functionInput"></a>

```typescript
public readonly functionInput: IResolvable | DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction</a>[]

---

##### `tableInput`<sup>Optional</sup> <a name="tableInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.tableInput"></a>

```typescript
public readonly tableInput: IResolvable | DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies</a>

---


### DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList <a name="DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.Initializer"></a>

```typescript
import { dataDatabricksRegisteredModelVersions } from '@cdktf/provider-databricks'

new dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.get"></a>

```typescript
public get(index: number): DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable</a>[]

---


### DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference <a name="DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.Initializer"></a>

```typescript
import { dataDatabricksRegisteredModelVersions } from '@cdktf/provider-databricks'

new dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.property.tableFullNameInput">tableFullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.property.tableFullName">tableFullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tableFullNameInput`<sup>Optional</sup> <a name="tableFullNameInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.property.tableFullNameInput"></a>

```typescript
public readonly tableFullNameInput: string;
```

- *Type:* string

---

##### `tableFullName`<sup>Required</sup> <a name="tableFullName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.property.tableFullName"></a>

```typescript
public readonly tableFullName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable</a>

---


### DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList <a name="DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.Initializer"></a>

```typescript
import { dataDatabricksRegisteredModelVersions } from '@cdktf/provider-databricks'

new dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.get"></a>

```typescript
public get(index: number): DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies</a>[]

---


### DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference <a name="DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.Initializer"></a>

```typescript
import { dataDatabricksRegisteredModelVersions } from '@cdktf/provider-databricks'

new dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.putDependencies">putDependencies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.resetDependencies">resetDependencies</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDependencies` <a name="putDependencies" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.putDependencies"></a>

```typescript
public putDependencies(value: IResolvable | DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.putDependencies.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies</a>[]

---

##### `resetDependencies` <a name="resetDependencies" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.resetDependencies"></a>

```typescript
public resetDependencies(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.property.dependencies">dependencies</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.property.dependenciesInput">dependenciesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.property.dependencies"></a>

```typescript
public readonly dependencies: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList</a>

---

##### `dependenciesInput`<sup>Optional</sup> <a name="dependenciesInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.property.dependenciesInput"></a>

```typescript
public readonly dependenciesInput: IResolvable | DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies</a>

---


### DataDatabricksRegisteredModelVersionsModelVersionsOutputReference <a name="DataDatabricksRegisteredModelVersionsModelVersionsOutputReference" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksRegisteredModelVersions } from '@cdktf/provider-databricks'

new dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.putAliases">putAliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.putModelVersionDependencies">putModelVersionDependencies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetAliases">resetAliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetBrowseOnly">resetBrowseOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetCatalogName">resetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetCreatedAt">resetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetCreatedBy">resetCreatedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetMetastoreId">resetMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetModelName">resetModelName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetModelVersionDependencies">resetModelVersionDependencies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetRunId">resetRunId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetRunWorkspaceId">resetRunWorkspaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetSchemaName">resetSchemaName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetStorageLocation">resetStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetUpdatedAt">resetUpdatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetUpdatedBy">resetUpdatedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAliases` <a name="putAliases" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.putAliases"></a>

```typescript
public putAliases(value: IResolvable | DataDatabricksRegisteredModelVersionsModelVersionsAliases[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.putAliases.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases">DataDatabricksRegisteredModelVersionsModelVersionsAliases</a>[]

---

##### `putModelVersionDependencies` <a name="putModelVersionDependencies" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.putModelVersionDependencies"></a>

```typescript
public putModelVersionDependencies(value: IResolvable | DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.putModelVersionDependencies.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies</a>[]

---

##### `resetAliases` <a name="resetAliases" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetAliases"></a>

```typescript
public resetAliases(): void
```

##### `resetBrowseOnly` <a name="resetBrowseOnly" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetBrowseOnly"></a>

```typescript
public resetBrowseOnly(): void
```

##### `resetCatalogName` <a name="resetCatalogName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetCatalogName"></a>

```typescript
public resetCatalogName(): void
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetCreatedAt` <a name="resetCreatedAt" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetCreatedAt"></a>

```typescript
public resetCreatedAt(): void
```

##### `resetCreatedBy` <a name="resetCreatedBy" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetCreatedBy"></a>

```typescript
public resetCreatedBy(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMetastoreId` <a name="resetMetastoreId" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetMetastoreId"></a>

```typescript
public resetMetastoreId(): void
```

##### `resetModelName` <a name="resetModelName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetModelName"></a>

```typescript
public resetModelName(): void
```

##### `resetModelVersionDependencies` <a name="resetModelVersionDependencies" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetModelVersionDependencies"></a>

```typescript
public resetModelVersionDependencies(): void
```

##### `resetRunId` <a name="resetRunId" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetRunId"></a>

```typescript
public resetRunId(): void
```

##### `resetRunWorkspaceId` <a name="resetRunWorkspaceId" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetRunWorkspaceId"></a>

```typescript
public resetRunWorkspaceId(): void
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetSchemaName"></a>

```typescript
public resetSchemaName(): void
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetStorageLocation` <a name="resetStorageLocation" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetStorageLocation"></a>

```typescript
public resetStorageLocation(): void
```

##### `resetUpdatedAt` <a name="resetUpdatedAt" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetUpdatedAt"></a>

```typescript
public resetUpdatedAt(): void
```

##### `resetUpdatedBy` <a name="resetUpdatedBy" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetUpdatedBy"></a>

```typescript
public resetUpdatedBy(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.aliases">aliases</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList">DataDatabricksRegisteredModelVersionsModelVersionsAliasesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.modelVersionDependencies">modelVersionDependencies</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.aliasesInput">aliasesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases">DataDatabricksRegisteredModelVersionsModelVersionsAliases</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.browseOnlyInput">browseOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.catalogNameInput">catalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.createdAtInput">createdAtInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.createdByInput">createdByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.metastoreIdInput">metastoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.modelNameInput">modelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.modelVersionDependenciesInput">modelVersionDependenciesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.runIdInput">runIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.runWorkspaceIdInput">runWorkspaceIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.storageLocationInput">storageLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.updatedAtInput">updatedAtInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.updatedByInput">updatedByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.versionInput">versionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.browseOnly">browseOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.catalogName">catalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.createdAt">createdAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.metastoreId">metastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.modelName">modelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.runId">runId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.runWorkspaceId">runWorkspaceId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.storageLocation">storageLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.updatedAt">updatedAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.updatedBy">updatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions">DataDatabricksRegisteredModelVersionsModelVersions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aliases`<sup>Required</sup> <a name="aliases" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.aliases"></a>

```typescript
public readonly aliases: DataDatabricksRegisteredModelVersionsModelVersionsAliasesList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList">DataDatabricksRegisteredModelVersionsModelVersionsAliasesList</a>

---

##### `modelVersionDependencies`<sup>Required</sup> <a name="modelVersionDependencies" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.modelVersionDependencies"></a>

```typescript
public readonly modelVersionDependencies: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList</a>

---

##### `aliasesInput`<sup>Optional</sup> <a name="aliasesInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.aliasesInput"></a>

```typescript
public readonly aliasesInput: IResolvable | DataDatabricksRegisteredModelVersionsModelVersionsAliases[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases">DataDatabricksRegisteredModelVersionsModelVersionsAliases</a>[]

---

##### `browseOnlyInput`<sup>Optional</sup> <a name="browseOnlyInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.browseOnlyInput"></a>

```typescript
public readonly browseOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.catalogNameInput"></a>

```typescript
public readonly catalogNameInput: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `createdAtInput`<sup>Optional</sup> <a name="createdAtInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.createdAtInput"></a>

```typescript
public readonly createdAtInput: number;
```

- *Type:* number

---

##### `createdByInput`<sup>Optional</sup> <a name="createdByInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.createdByInput"></a>

```typescript
public readonly createdByInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metastoreIdInput`<sup>Optional</sup> <a name="metastoreIdInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.metastoreIdInput"></a>

```typescript
public readonly metastoreIdInput: string;
```

- *Type:* string

---

##### `modelNameInput`<sup>Optional</sup> <a name="modelNameInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.modelNameInput"></a>

```typescript
public readonly modelNameInput: string;
```

- *Type:* string

---

##### `modelVersionDependenciesInput`<sup>Optional</sup> <a name="modelVersionDependenciesInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.modelVersionDependenciesInput"></a>

```typescript
public readonly modelVersionDependenciesInput: IResolvable | DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies</a>[]

---

##### `runIdInput`<sup>Optional</sup> <a name="runIdInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.runIdInput"></a>

```typescript
public readonly runIdInput: string;
```

- *Type:* string

---

##### `runWorkspaceIdInput`<sup>Optional</sup> <a name="runWorkspaceIdInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.runWorkspaceIdInput"></a>

```typescript
public readonly runWorkspaceIdInput: number;
```

- *Type:* number

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.schemaNameInput"></a>

```typescript
public readonly schemaNameInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `storageLocationInput`<sup>Optional</sup> <a name="storageLocationInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.storageLocationInput"></a>

```typescript
public readonly storageLocationInput: string;
```

- *Type:* string

---

##### `updatedAtInput`<sup>Optional</sup> <a name="updatedAtInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.updatedAtInput"></a>

```typescript
public readonly updatedAtInput: number;
```

- *Type:* number

---

##### `updatedByInput`<sup>Optional</sup> <a name="updatedByInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.updatedByInput"></a>

```typescript
public readonly updatedByInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: number;
```

- *Type:* number

---

##### `browseOnly`<sup>Required</sup> <a name="browseOnly" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.browseOnly"></a>

```typescript
public readonly browseOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: number;
```

- *Type:* number

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metastoreId`<sup>Required</sup> <a name="metastoreId" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.metastoreId"></a>

```typescript
public readonly metastoreId: string;
```

- *Type:* string

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.modelName"></a>

```typescript
public readonly modelName: string;
```

- *Type:* string

---

##### `runId`<sup>Required</sup> <a name="runId" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.runId"></a>

```typescript
public readonly runId: string;
```

- *Type:* string

---

##### `runWorkspaceId`<sup>Required</sup> <a name="runWorkspaceId" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.runWorkspaceId"></a>

```typescript
public readonly runWorkspaceId: number;
```

- *Type:* number

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `storageLocation`<sup>Required</sup> <a name="storageLocation" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.storageLocation"></a>

```typescript
public readonly storageLocation: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: number;
```

- *Type:* number

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.updatedBy"></a>

```typescript
public readonly updatedBy: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksRegisteredModelVersionsModelVersions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions">DataDatabricksRegisteredModelVersionsModelVersions</a>

---



