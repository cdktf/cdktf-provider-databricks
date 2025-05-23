# `dataDatabricksRecipientFederationPolicies` Submodule <a name="`dataDatabricksRecipientFederationPolicies` Submodule" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksRecipientFederationPolicies <a name="DataDatabricksRecipientFederationPolicies" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/recipient_federation_policies databricks_recipient_federation_policies}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.Initializer"></a>

```typescript
import { dataDatabricksRecipientFederationPolicies } from '@cdktf/provider-databricks'

new dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies(scope: Construct, id: string, config?: DataDatabricksRecipientFederationPoliciesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig">DataDatabricksRecipientFederationPoliciesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig">DataDatabricksRecipientFederationPoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksRecipientFederationPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.isConstruct"></a>

```typescript
import { dataDatabricksRecipientFederationPolicies } from '@cdktf/provider-databricks'

dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.isTerraformElement"></a>

```typescript
import { dataDatabricksRecipientFederationPolicies } from '@cdktf/provider-databricks'

dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.isTerraformDataSource"></a>

```typescript
import { dataDatabricksRecipientFederationPolicies } from '@cdktf/provider-databricks'

dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.generateConfigForImport"></a>

```typescript
import { dataDatabricksRecipientFederationPolicies } from '@cdktf/provider-databricks'

dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatabricksRecipientFederationPolicies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksRecipientFederationPolicies to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksRecipientFederationPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/recipient_federation_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksRecipientFederationPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.policies">policies</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList">DataDatabricksRecipientFederationPoliciesPoliciesList</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.policies"></a>

```typescript
public readonly policies: DataDatabricksRecipientFederationPoliciesPoliciesList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList">DataDatabricksRecipientFederationPoliciesPoliciesList</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksRecipientFederationPoliciesConfig <a name="DataDatabricksRecipientFederationPoliciesConfig" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig.Initializer"></a>

```typescript
import { dataDatabricksRecipientFederationPolicies } from '@cdktf/provider-databricks'

const dataDatabricksRecipientFederationPoliciesConfig: dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

### DataDatabricksRecipientFederationPoliciesPolicies <a name="DataDatabricksRecipientFederationPoliciesPolicies" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPolicies.Initializer"></a>

```typescript
import { dataDatabricksRecipientFederationPolicies } from '@cdktf/provider-databricks'

const dataDatabricksRecipientFederationPoliciesPolicies: dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPolicies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPolicies.property.comment">comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/recipient_federation_policies#comment DataDatabricksRecipientFederationPolicies#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPolicies.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/recipient_federation_policies#name DataDatabricksRecipientFederationPolicies#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPolicies.property.oidcPolicy">oidcPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy">DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/recipient_federation_policies#oidc_policy DataDatabricksRecipientFederationPolicies#oidc_policy}. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPolicies.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/recipient_federation_policies#comment DataDatabricksRecipientFederationPolicies#comment}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPolicies.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/recipient_federation_policies#name DataDatabricksRecipientFederationPolicies#name}.

---

##### `oidcPolicy`<sup>Optional</sup> <a name="oidcPolicy" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPolicies.property.oidcPolicy"></a>

```typescript
public readonly oidcPolicy: DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy">DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/recipient_federation_policies#oidc_policy DataDatabricksRecipientFederationPolicies#oidc_policy}.

---

### DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy <a name="DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy.Initializer"></a>

```typescript
import { dataDatabricksRecipientFederationPolicies } from '@cdktf/provider-databricks'

const dataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy: dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy.property.issuer">issuer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/recipient_federation_policies#issuer DataDatabricksRecipientFederationPolicies#issuer}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy.property.subject">subject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/recipient_federation_policies#subject DataDatabricksRecipientFederationPolicies#subject}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy.property.subjectClaim">subjectClaim</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/recipient_federation_policies#subject_claim DataDatabricksRecipientFederationPolicies#subject_claim}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy.property.audiences">audiences</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/recipient_federation_policies#audiences DataDatabricksRecipientFederationPolicies#audiences}. |

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/recipient_federation_policies#issuer DataDatabricksRecipientFederationPolicies#issuer}.

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/recipient_federation_policies#subject DataDatabricksRecipientFederationPolicies#subject}.

---

##### `subjectClaim`<sup>Required</sup> <a name="subjectClaim" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy.property.subjectClaim"></a>

```typescript
public readonly subjectClaim: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/recipient_federation_policies#subject_claim DataDatabricksRecipientFederationPolicies#subject_claim}.

---

##### `audiences`<sup>Optional</sup> <a name="audiences" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy.property.audiences"></a>

```typescript
public readonly audiences: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/recipient_federation_policies#audiences DataDatabricksRecipientFederationPolicies#audiences}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksRecipientFederationPoliciesPoliciesList <a name="DataDatabricksRecipientFederationPoliciesPoliciesList" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.Initializer"></a>

```typescript
import { dataDatabricksRecipientFederationPolicies } from '@cdktf/provider-databricks'

new dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.get"></a>

```typescript
public get(index: number): DataDatabricksRecipientFederationPoliciesPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPolicies">DataDatabricksRecipientFederationPoliciesPolicies</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksRecipientFederationPoliciesPolicies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPolicies">DataDatabricksRecipientFederationPoliciesPolicies</a>[]

---


### DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference <a name="DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.Initializer"></a>

```typescript
import { dataDatabricksRecipientFederationPolicies } from '@cdktf/provider-databricks'

new dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.resetAudiences">resetAudiences</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAudiences` <a name="resetAudiences" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.resetAudiences"></a>

```typescript
public resetAudiences(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.audiencesInput">audiencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.issuerInput">issuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.subjectClaimInput">subjectClaimInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.subjectInput">subjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.audiences">audiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.subject">subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.subjectClaim">subjectClaim</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy">DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `audiencesInput`<sup>Optional</sup> <a name="audiencesInput" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.audiencesInput"></a>

```typescript
public readonly audiencesInput: string[];
```

- *Type:* string[]

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.issuerInput"></a>

```typescript
public readonly issuerInput: string;
```

- *Type:* string

---

##### `subjectClaimInput`<sup>Optional</sup> <a name="subjectClaimInput" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.subjectClaimInput"></a>

```typescript
public readonly subjectClaimInput: string;
```

- *Type:* string

---

##### `subjectInput`<sup>Optional</sup> <a name="subjectInput" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.subjectInput"></a>

```typescript
public readonly subjectInput: string;
```

- *Type:* string

---

##### `audiences`<sup>Required</sup> <a name="audiences" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.audiences"></a>

```typescript
public readonly audiences: string[];
```

- *Type:* string[]

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

---

##### `subjectClaim`<sup>Required</sup> <a name="subjectClaim" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.subjectClaim"></a>

```typescript
public readonly subjectClaim: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy">DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy</a>

---


### DataDatabricksRecipientFederationPoliciesPoliciesOutputReference <a name="DataDatabricksRecipientFederationPoliciesPoliciesOutputReference" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.Initializer"></a>

```typescript
import { dataDatabricksRecipientFederationPolicies } from '@cdktf/provider-databricks'

new dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.putOidcPolicy">putOidcPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.resetOidcPolicy">resetOidcPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOidcPolicy` <a name="putOidcPolicy" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.putOidcPolicy"></a>

```typescript
public putOidcPolicy(value: DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.putOidcPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy">DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy</a>

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOidcPolicy` <a name="resetOidcPolicy" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.resetOidcPolicy"></a>

```typescript
public resetOidcPolicy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.oidcPolicy">oidcPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference">DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.oidcPolicyInput">oidcPolicyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy">DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPolicies">DataDatabricksRecipientFederationPoliciesPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `oidcPolicy`<sup>Required</sup> <a name="oidcPolicy" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.oidcPolicy"></a>

```typescript
public readonly oidcPolicy: DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference">DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `oidcPolicyInput`<sup>Optional</sup> <a name="oidcPolicyInput" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.oidcPolicyInput"></a>

```typescript
public readonly oidcPolicyInput: IResolvable | DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy">DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksRecipientFederationPoliciesPolicies;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPolicies">DataDatabricksRecipientFederationPoliciesPolicies</a>

---



