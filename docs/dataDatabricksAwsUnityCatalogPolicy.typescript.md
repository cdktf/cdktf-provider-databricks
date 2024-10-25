# `dataDatabricksAwsUnityCatalogPolicy` Submodule <a name="`dataDatabricksAwsUnityCatalogPolicy` Submodule" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAwsUnityCatalogPolicy <a name="DataDatabricksAwsUnityCatalogPolicy" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/aws_unity_catalog_policy databricks_aws_unity_catalog_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.Initializer"></a>

```typescript
import { dataDatabricksAwsUnityCatalogPolicy } from '@cdktf/provider-databricks'

new dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy(scope: Construct, id: string, config: DataDatabricksAwsUnityCatalogPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig">DataDatabricksAwsUnityCatalogPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig">DataDatabricksAwsUnityCatalogPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.resetKmsName">resetKmsName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKmsName` <a name="resetKmsName" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.resetKmsName"></a>

```typescript
public resetKmsName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksAwsUnityCatalogPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.isConstruct"></a>

```typescript
import { dataDatabricksAwsUnityCatalogPolicy } from '@cdktf/provider-databricks'

dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.isTerraformElement"></a>

```typescript
import { dataDatabricksAwsUnityCatalogPolicy } from '@cdktf/provider-databricks'

dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.isTerraformDataSource"></a>

```typescript
import { dataDatabricksAwsUnityCatalogPolicy } from '@cdktf/provider-databricks'

dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.generateConfigForImport"></a>

```typescript
import { dataDatabricksAwsUnityCatalogPolicy } from '@cdktf/provider-databricks'

dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatabricksAwsUnityCatalogPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksAwsUnityCatalogPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksAwsUnityCatalogPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/aws_unity_catalog_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksAwsUnityCatalogPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.json">json</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.awsAccountIdInput">awsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.kmsNameInput">kmsNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.roleNameInput">roleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.kmsName">kmsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.roleName">roleName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.json"></a>

```typescript
public readonly json: string;
```

- *Type:* string

---

##### `awsAccountIdInput`<sup>Optional</sup> <a name="awsAccountIdInput" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.awsAccountIdInput"></a>

```typescript
public readonly awsAccountIdInput: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kmsNameInput`<sup>Optional</sup> <a name="kmsNameInput" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.kmsNameInput"></a>

```typescript
public readonly kmsNameInput: string;
```

- *Type:* string

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.roleNameInput"></a>

```typescript
public readonly roleNameInput: string;
```

- *Type:* string

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsName`<sup>Required</sup> <a name="kmsName" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.kmsName"></a>

```typescript
public readonly kmsName: string;
```

- *Type:* string

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAwsUnityCatalogPolicyConfig <a name="DataDatabricksAwsUnityCatalogPolicyConfig" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.Initializer"></a>

```typescript
import { dataDatabricksAwsUnityCatalogPolicy } from '@cdktf/provider-databricks'

const dataDatabricksAwsUnityCatalogPolicyConfig: dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/aws_unity_catalog_policy#aws_account_id DataDatabricksAwsUnityCatalogPolicy#aws_account_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.bucketName">bucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/aws_unity_catalog_policy#bucket_name DataDatabricksAwsUnityCatalogPolicy#bucket_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.roleName">roleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/aws_unity_catalog_policy#role_name DataDatabricksAwsUnityCatalogPolicy#role_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/aws_unity_catalog_policy#id DataDatabricksAwsUnityCatalogPolicy#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.kmsName">kmsName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/aws_unity_catalog_policy#kms_name DataDatabricksAwsUnityCatalogPolicy#kms_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/aws_unity_catalog_policy#aws_account_id DataDatabricksAwsUnityCatalogPolicy#aws_account_id}.

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/aws_unity_catalog_policy#bucket_name DataDatabricksAwsUnityCatalogPolicy#bucket_name}.

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/aws_unity_catalog_policy#role_name DataDatabricksAwsUnityCatalogPolicy#role_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/aws_unity_catalog_policy#id DataDatabricksAwsUnityCatalogPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsName`<sup>Optional</sup> <a name="kmsName" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.kmsName"></a>

```typescript
public readonly kmsName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/data-sources/aws_unity_catalog_policy#kms_name DataDatabricksAwsUnityCatalogPolicy#kms_name}.

---



