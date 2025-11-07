# `dataDatabricksMlflowModels` Submodule <a name="`dataDatabricksMlflowModels` Submodule" id="@cdktf/provider-databricks.dataDatabricksMlflowModels"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksMlflowModels <a name="DataDatabricksMlflowModels" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/mlflow_models databricks_mlflow_models}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.Initializer"></a>

```typescript
import { dataDatabricksMlflowModels } from '@cdktf/provider-databricks'

new dataDatabricksMlflowModels.DataDatabricksMlflowModels(scope: Construct, id: string, config?: DataDatabricksMlflowModelsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsConfig">DataDatabricksMlflowModelsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsConfig">DataDatabricksMlflowModelsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.resetNames">resetNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksMlflowModelsProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfig">DataDatabricksMlflowModelsProviderConfig</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNames` <a name="resetNames" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.resetNames"></a>

```typescript
public resetNames(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksMlflowModels resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.isConstruct"></a>

```typescript
import { dataDatabricksMlflowModels } from '@cdktf/provider-databricks'

dataDatabricksMlflowModels.DataDatabricksMlflowModels.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.isTerraformElement"></a>

```typescript
import { dataDatabricksMlflowModels } from '@cdktf/provider-databricks'

dataDatabricksMlflowModels.DataDatabricksMlflowModels.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.isTerraformDataSource"></a>

```typescript
import { dataDatabricksMlflowModels } from '@cdktf/provider-databricks'

dataDatabricksMlflowModels.DataDatabricksMlflowModels.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.generateConfigForImport"></a>

```typescript
import { dataDatabricksMlflowModels } from '@cdktf/provider-databricks'

dataDatabricksMlflowModels.DataDatabricksMlflowModels.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatabricksMlflowModels resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksMlflowModels to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksMlflowModels that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/mlflow_models#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksMlflowModels to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference">DataDatabricksMlflowModelsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.namesInput">namesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.providerConfigInput">providerConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfig">DataDatabricksMlflowModelsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.names">names</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksMlflowModelsProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference">DataDatabricksMlflowModelsProviderConfigOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namesInput`<sup>Optional</sup> <a name="namesInput" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.namesInput"></a>

```typescript
public readonly namesInput: string[];
```

- *Type:* string[]

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: DataDatabricksMlflowModelsProviderConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfig">DataDatabricksMlflowModelsProviderConfig</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `names`<sup>Required</sup> <a name="names" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.names"></a>

```typescript
public readonly names: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModels.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksMlflowModelsConfig <a name="DataDatabricksMlflowModelsConfig" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsConfig.Initializer"></a>

```typescript
import { dataDatabricksMlflowModels } from '@cdktf/provider-databricks'

const dataDatabricksMlflowModelsConfig: dataDatabricksMlflowModels.DataDatabricksMlflowModelsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/mlflow_models#id DataDatabricksMlflowModels#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsConfig.property.names">names</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/mlflow_models#names DataDatabricksMlflowModels#names}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfig">DataDatabricksMlflowModelsProviderConfig</a></code> | provider_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/mlflow_models#id DataDatabricksMlflowModels#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `names`<sup>Optional</sup> <a name="names" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsConfig.property.names"></a>

```typescript
public readonly names: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/mlflow_models#names DataDatabricksMlflowModels#names}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksMlflowModelsProviderConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfig">DataDatabricksMlflowModelsProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/mlflow_models#provider_config DataDatabricksMlflowModels#provider_config}

---

### DataDatabricksMlflowModelsProviderConfig <a name="DataDatabricksMlflowModelsProviderConfig" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksMlflowModels } from '@cdktf/provider-databricks'

const dataDatabricksMlflowModelsProviderConfig: dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/mlflow_models#workspace_id DataDatabricksMlflowModels#workspace_id}. |

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/mlflow_models#workspace_id DataDatabricksMlflowModels#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksMlflowModelsProviderConfigOutputReference <a name="DataDatabricksMlflowModelsProviderConfigOutputReference" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksMlflowModels } from '@cdktf/provider-databricks'

new dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfig">DataDatabricksMlflowModelsProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksMlflowModelsProviderConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMlflowModels.DataDatabricksMlflowModelsProviderConfig">DataDatabricksMlflowModelsProviderConfig</a>

---



