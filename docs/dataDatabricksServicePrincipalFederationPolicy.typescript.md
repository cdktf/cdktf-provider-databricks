# `dataDatabricksServicePrincipalFederationPolicy` Submodule <a name="`dataDatabricksServicePrincipalFederationPolicy` Submodule" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksServicePrincipalFederationPolicy <a name="DataDatabricksServicePrincipalFederationPolicy" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/service_principal_federation_policy databricks_service_principal_federation_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.Initializer"></a>

```typescript
import { dataDatabricksServicePrincipalFederationPolicy } from '@cdktf/provider-databricks'

new dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy(scope: Construct, id: string, config?: DataDatabricksServicePrincipalFederationPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig">DataDatabricksServicePrincipalFederationPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig">DataDatabricksServicePrincipalFederationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.putOidcPolicy">putOidcPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.resetOidcPolicy">resetOidcPolicy</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putOidcPolicy` <a name="putOidcPolicy" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.putOidcPolicy"></a>

```typescript
public putOidcPolicy(value: DataDatabricksServicePrincipalFederationPolicyOidcPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.putOidcPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy">DataDatabricksServicePrincipalFederationPolicyOidcPolicy</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetOidcPolicy` <a name="resetOidcPolicy" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.resetOidcPolicy"></a>

```typescript
public resetOidcPolicy(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksServicePrincipalFederationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.isConstruct"></a>

```typescript
import { dataDatabricksServicePrincipalFederationPolicy } from '@cdktf/provider-databricks'

dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.isTerraformElement"></a>

```typescript
import { dataDatabricksServicePrincipalFederationPolicy } from '@cdktf/provider-databricks'

dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.isTerraformDataSource"></a>

```typescript
import { dataDatabricksServicePrincipalFederationPolicy } from '@cdktf/provider-databricks'

dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.generateConfigForImport"></a>

```typescript
import { dataDatabricksServicePrincipalFederationPolicy } from '@cdktf/provider-databricks'

dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatabricksServicePrincipalFederationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksServicePrincipalFederationPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksServicePrincipalFederationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/service_principal_federation_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksServicePrincipalFederationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.oidcPolicy">oidcPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference">DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.servicePrincipalId">servicePrincipalId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.oidcPolicyInput">oidcPolicyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy">DataDatabricksServicePrincipalFederationPolicyOidcPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.description">description</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `oidcPolicy`<sup>Required</sup> <a name="oidcPolicy" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.oidcPolicy"></a>

```typescript
public readonly oidcPolicy: DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference">DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference</a>

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

##### `servicePrincipalId`<sup>Required</sup> <a name="servicePrincipalId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.servicePrincipalId"></a>

```typescript
public readonly servicePrincipalId: number;
```

- *Type:* number

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `oidcPolicyInput`<sup>Optional</sup> <a name="oidcPolicyInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.oidcPolicyInput"></a>

```typescript
public readonly oidcPolicyInput: IResolvable | DataDatabricksServicePrincipalFederationPolicyOidcPolicy;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy">DataDatabricksServicePrincipalFederationPolicyOidcPolicy</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksServicePrincipalFederationPolicyConfig <a name="DataDatabricksServicePrincipalFederationPolicyConfig" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.Initializer"></a>

```typescript
import { dataDatabricksServicePrincipalFederationPolicy } from '@cdktf/provider-databricks'

const dataDatabricksServicePrincipalFederationPolicyConfig: dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/service_principal_federation_policy#description DataDatabricksServicePrincipalFederationPolicy#description}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.oidcPolicy">oidcPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy">DataDatabricksServicePrincipalFederationPolicyOidcPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/service_principal_federation_policy#oidc_policy DataDatabricksServicePrincipalFederationPolicy#oidc_policy}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/service_principal_federation_policy#description DataDatabricksServicePrincipalFederationPolicy#description}.

---

##### `oidcPolicy`<sup>Optional</sup> <a name="oidcPolicy" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.oidcPolicy"></a>

```typescript
public readonly oidcPolicy: DataDatabricksServicePrincipalFederationPolicyOidcPolicy;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy">DataDatabricksServicePrincipalFederationPolicyOidcPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/service_principal_federation_policy#oidc_policy DataDatabricksServicePrincipalFederationPolicy#oidc_policy}.

---

### DataDatabricksServicePrincipalFederationPolicyOidcPolicy <a name="DataDatabricksServicePrincipalFederationPolicyOidcPolicy" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy.Initializer"></a>

```typescript
import { dataDatabricksServicePrincipalFederationPolicy } from '@cdktf/provider-databricks'

const dataDatabricksServicePrincipalFederationPolicyOidcPolicy: dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy.property.audiences">audiences</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/service_principal_federation_policy#audiences DataDatabricksServicePrincipalFederationPolicy#audiences}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy.property.issuer">issuer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/service_principal_federation_policy#issuer DataDatabricksServicePrincipalFederationPolicy#issuer}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy.property.jwksJson">jwksJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/service_principal_federation_policy#jwks_json DataDatabricksServicePrincipalFederationPolicy#jwks_json}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy.property.jwksUri">jwksUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/service_principal_federation_policy#jwks_uri DataDatabricksServicePrincipalFederationPolicy#jwks_uri}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy.property.subject">subject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/service_principal_federation_policy#subject DataDatabricksServicePrincipalFederationPolicy#subject}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy.property.subjectClaim">subjectClaim</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/service_principal_federation_policy#subject_claim DataDatabricksServicePrincipalFederationPolicy#subject_claim}. |

---

##### `audiences`<sup>Optional</sup> <a name="audiences" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy.property.audiences"></a>

```typescript
public readonly audiences: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/service_principal_federation_policy#audiences DataDatabricksServicePrincipalFederationPolicy#audiences}.

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/service_principal_federation_policy#issuer DataDatabricksServicePrincipalFederationPolicy#issuer}.

---

##### `jwksJson`<sup>Optional</sup> <a name="jwksJson" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy.property.jwksJson"></a>

```typescript
public readonly jwksJson: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/service_principal_federation_policy#jwks_json DataDatabricksServicePrincipalFederationPolicy#jwks_json}.

---

##### `jwksUri`<sup>Optional</sup> <a name="jwksUri" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy.property.jwksUri"></a>

```typescript
public readonly jwksUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/service_principal_federation_policy#jwks_uri DataDatabricksServicePrincipalFederationPolicy#jwks_uri}.

---

##### `subject`<sup>Optional</sup> <a name="subject" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/service_principal_federation_policy#subject DataDatabricksServicePrincipalFederationPolicy#subject}.

---

##### `subjectClaim`<sup>Optional</sup> <a name="subjectClaim" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy.property.subjectClaim"></a>

```typescript
public readonly subjectClaim: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/service_principal_federation_policy#subject_claim DataDatabricksServicePrincipalFederationPolicy#subject_claim}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference <a name="DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.Initializer"></a>

```typescript
import { dataDatabricksServicePrincipalFederationPolicy } from '@cdktf/provider-databricks'

new dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.resetAudiences">resetAudiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.resetIssuer">resetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.resetJwksJson">resetJwksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.resetJwksUri">resetJwksUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.resetSubject">resetSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.resetSubjectClaim">resetSubjectClaim</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAudiences` <a name="resetAudiences" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.resetAudiences"></a>

```typescript
public resetAudiences(): void
```

##### `resetIssuer` <a name="resetIssuer" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.resetIssuer"></a>

```typescript
public resetIssuer(): void
```

##### `resetJwksJson` <a name="resetJwksJson" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.resetJwksJson"></a>

```typescript
public resetJwksJson(): void
```

##### `resetJwksUri` <a name="resetJwksUri" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.resetJwksUri"></a>

```typescript
public resetJwksUri(): void
```

##### `resetSubject` <a name="resetSubject" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.resetSubject"></a>

```typescript
public resetSubject(): void
```

##### `resetSubjectClaim` <a name="resetSubjectClaim" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.resetSubjectClaim"></a>

```typescript
public resetSubjectClaim(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.audiencesInput">audiencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.issuerInput">issuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksJsonInput">jwksJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksUriInput">jwksUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subjectClaimInput">subjectClaimInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subjectInput">subjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.audiences">audiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksJson">jwksJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksUri">jwksUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subject">subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subjectClaim">subjectClaim</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy">DataDatabricksServicePrincipalFederationPolicyOidcPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `audiencesInput`<sup>Optional</sup> <a name="audiencesInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.audiencesInput"></a>

```typescript
public readonly audiencesInput: string[];
```

- *Type:* string[]

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.issuerInput"></a>

```typescript
public readonly issuerInput: string;
```

- *Type:* string

---

##### `jwksJsonInput`<sup>Optional</sup> <a name="jwksJsonInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksJsonInput"></a>

```typescript
public readonly jwksJsonInput: string;
```

- *Type:* string

---

##### `jwksUriInput`<sup>Optional</sup> <a name="jwksUriInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksUriInput"></a>

```typescript
public readonly jwksUriInput: string;
```

- *Type:* string

---

##### `subjectClaimInput`<sup>Optional</sup> <a name="subjectClaimInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subjectClaimInput"></a>

```typescript
public readonly subjectClaimInput: string;
```

- *Type:* string

---

##### `subjectInput`<sup>Optional</sup> <a name="subjectInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subjectInput"></a>

```typescript
public readonly subjectInput: string;
```

- *Type:* string

---

##### `audiences`<sup>Required</sup> <a name="audiences" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.audiences"></a>

```typescript
public readonly audiences: string[];
```

- *Type:* string[]

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `jwksJson`<sup>Required</sup> <a name="jwksJson" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksJson"></a>

```typescript
public readonly jwksJson: string;
```

- *Type:* string

---

##### `jwksUri`<sup>Required</sup> <a name="jwksUri" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksUri"></a>

```typescript
public readonly jwksUri: string;
```

- *Type:* string

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

---

##### `subjectClaim`<sup>Required</sup> <a name="subjectClaim" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subjectClaim"></a>

```typescript
public readonly subjectClaim: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksServicePrincipalFederationPolicyOidcPolicy;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy">DataDatabricksServicePrincipalFederationPolicyOidcPolicy</a>

---



