# `dataDatabricksAwsBucketPolicy` Submodule <a name="`dataDatabricksAwsBucketPolicy` Submodule" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAwsBucketPolicy <a name="DataDatabricksAwsBucketPolicy" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/data-sources/aws_bucket_policy databricks_aws_bucket_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.Initializer"></a>

```typescript
import { dataDatabricksAwsBucketPolicy } from '@cdktf/provider-databricks'

new dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy(scope: Construct, id: string, config: DataDatabricksAwsBucketPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig">DataDatabricksAwsBucketPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig">DataDatabricksAwsBucketPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.resetAwsPartition">resetAwsPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.resetDatabricksAccountId">resetDatabricksAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.resetDatabricksE2AccountId">resetDatabricksE2AccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.resetFullAccessRole">resetFullAccessRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAwsPartition` <a name="resetAwsPartition" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.resetAwsPartition"></a>

```typescript
public resetAwsPartition(): void
```

##### `resetDatabricksAccountId` <a name="resetDatabricksAccountId" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.resetDatabricksAccountId"></a>

```typescript
public resetDatabricksAccountId(): void
```

##### `resetDatabricksE2AccountId` <a name="resetDatabricksE2AccountId" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.resetDatabricksE2AccountId"></a>

```typescript
public resetDatabricksE2AccountId(): void
```

##### `resetFullAccessRole` <a name="resetFullAccessRole" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.resetFullAccessRole"></a>

```typescript
public resetFullAccessRole(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksAwsBucketPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.isConstruct"></a>

```typescript
import { dataDatabricksAwsBucketPolicy } from '@cdktf/provider-databricks'

dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.isTerraformElement"></a>

```typescript
import { dataDatabricksAwsBucketPolicy } from '@cdktf/provider-databricks'

dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.isTerraformDataSource"></a>

```typescript
import { dataDatabricksAwsBucketPolicy } from '@cdktf/provider-databricks'

dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.generateConfigForImport"></a>

```typescript
import { dataDatabricksAwsBucketPolicy } from '@cdktf/provider-databricks'

dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatabricksAwsBucketPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksAwsBucketPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksAwsBucketPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/data-sources/aws_bucket_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksAwsBucketPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.json">json</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.awsPartitionInput">awsPartitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.databricksAccountIdInput">databricksAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.databricksE2AccountIdInput">databricksE2AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.fullAccessRoleInput">fullAccessRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.awsPartition">awsPartition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.databricksAccountId">databricksAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.databricksE2AccountId">databricksE2AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.fullAccessRole">fullAccessRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.json"></a>

```typescript
public readonly json: string;
```

- *Type:* string

---

##### `awsPartitionInput`<sup>Optional</sup> <a name="awsPartitionInput" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.awsPartitionInput"></a>

```typescript
public readonly awsPartitionInput: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `databricksAccountIdInput`<sup>Optional</sup> <a name="databricksAccountIdInput" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.databricksAccountIdInput"></a>

```typescript
public readonly databricksAccountIdInput: string;
```

- *Type:* string

---

##### `databricksE2AccountIdInput`<sup>Optional</sup> <a name="databricksE2AccountIdInput" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.databricksE2AccountIdInput"></a>

```typescript
public readonly databricksE2AccountIdInput: string;
```

- *Type:* string

---

##### `fullAccessRoleInput`<sup>Optional</sup> <a name="fullAccessRoleInput" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.fullAccessRoleInput"></a>

```typescript
public readonly fullAccessRoleInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `awsPartition`<sup>Required</sup> <a name="awsPartition" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.awsPartition"></a>

```typescript
public readonly awsPartition: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `databricksAccountId`<sup>Required</sup> <a name="databricksAccountId" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.databricksAccountId"></a>

```typescript
public readonly databricksAccountId: string;
```

- *Type:* string

---

##### `databricksE2AccountId`<sup>Required</sup> <a name="databricksE2AccountId" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.databricksE2AccountId"></a>

```typescript
public readonly databricksE2AccountId: string;
```

- *Type:* string

---

##### `fullAccessRole`<sup>Required</sup> <a name="fullAccessRole" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.fullAccessRole"></a>

```typescript
public readonly fullAccessRole: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAwsBucketPolicyConfig <a name="DataDatabricksAwsBucketPolicyConfig" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.Initializer"></a>

```typescript
import { dataDatabricksAwsBucketPolicy } from '@cdktf/provider-databricks'

const dataDatabricksAwsBucketPolicyConfig: dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/data-sources/aws_bucket_policy#bucket DataDatabricksAwsBucketPolicy#bucket}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.awsPartition">awsPartition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/data-sources/aws_bucket_policy#aws_partition DataDatabricksAwsBucketPolicy#aws_partition}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.databricksAccountId">databricksAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/data-sources/aws_bucket_policy#databricks_account_id DataDatabricksAwsBucketPolicy#databricks_account_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.databricksE2AccountId">databricksE2AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/data-sources/aws_bucket_policy#databricks_e2_account_id DataDatabricksAwsBucketPolicy#databricks_e2_account_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.fullAccessRole">fullAccessRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/data-sources/aws_bucket_policy#full_access_role DataDatabricksAwsBucketPolicy#full_access_role}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/data-sources/aws_bucket_policy#id DataDatabricksAwsBucketPolicy#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/data-sources/aws_bucket_policy#bucket DataDatabricksAwsBucketPolicy#bucket}.

---

##### `awsPartition`<sup>Optional</sup> <a name="awsPartition" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.awsPartition"></a>

```typescript
public readonly awsPartition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/data-sources/aws_bucket_policy#aws_partition DataDatabricksAwsBucketPolicy#aws_partition}.

---

##### `databricksAccountId`<sup>Optional</sup> <a name="databricksAccountId" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.databricksAccountId"></a>

```typescript
public readonly databricksAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/data-sources/aws_bucket_policy#databricks_account_id DataDatabricksAwsBucketPolicy#databricks_account_id}.

---

##### `databricksE2AccountId`<sup>Optional</sup> <a name="databricksE2AccountId" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.databricksE2AccountId"></a>

```typescript
public readonly databricksE2AccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/data-sources/aws_bucket_policy#databricks_e2_account_id DataDatabricksAwsBucketPolicy#databricks_e2_account_id}.

---

##### `fullAccessRole`<sup>Optional</sup> <a name="fullAccessRole" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.fullAccessRole"></a>

```typescript
public readonly fullAccessRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/data-sources/aws_bucket_policy#full_access_role DataDatabricksAwsBucketPolicy#full_access_role}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/data-sources/aws_bucket_policy#id DataDatabricksAwsBucketPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



