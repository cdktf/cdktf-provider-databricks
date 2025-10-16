# `dataDatabricksAccountFederationPolicy` Submodule <a name="`dataDatabricksAccountFederationPolicy` Submodule" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAccountFederationPolicy <a name="DataDatabricksAccountFederationPolicy" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/account_federation_policy databricks_account_federation_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_federation_policy.DataDatabricksAccountFederationPolicy;

DataDatabricksAccountFederationPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .description(java.lang.String)
//  .oidcPolicy(DataDatabricksAccountFederationPolicyOidcPolicy)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/account_federation_policy#description DataDatabricksAccountFederationPolicy#description}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.Initializer.parameter.oidcPolicy">oidcPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy">DataDatabricksAccountFederationPolicyOidcPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/account_federation_policy#oidc_policy DataDatabricksAccountFederationPolicy#oidc_policy}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/account_federation_policy#description DataDatabricksAccountFederationPolicy#description}.

---

##### `oidcPolicy`<sup>Optional</sup> <a name="oidcPolicy" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.Initializer.parameter.oidcPolicy"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy">DataDatabricksAccountFederationPolicyOidcPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/account_federation_policy#oidc_policy DataDatabricksAccountFederationPolicy#oidc_policy}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.putOidcPolicy">putOidcPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.resetOidcPolicy">resetOidcPolicy</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putOidcPolicy` <a name="putOidcPolicy" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.putOidcPolicy"></a>

```java
public void putOidcPolicy(DataDatabricksAccountFederationPolicyOidcPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.putOidcPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy">DataDatabricksAccountFederationPolicyOidcPolicy</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetOidcPolicy` <a name="resetOidcPolicy" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.resetOidcPolicy"></a>

```java
public void resetOidcPolicy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksAccountFederationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_federation_policy.DataDatabricksAccountFederationPolicy;

DataDatabricksAccountFederationPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_federation_policy.DataDatabricksAccountFederationPolicy;

DataDatabricksAccountFederationPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_federation_policy.DataDatabricksAccountFederationPolicy;

DataDatabricksAccountFederationPolicy.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_federation_policy.DataDatabricksAccountFederationPolicy;

DataDatabricksAccountFederationPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatabricksAccountFederationPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataDatabricksAccountFederationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatabricksAccountFederationPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatabricksAccountFederationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/account_federation_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksAccountFederationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.oidcPolicy">oidcPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference">DataDatabricksAccountFederationPolicyOidcPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.policyId">policyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.servicePrincipalId">servicePrincipalId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.oidcPolicyInput">oidcPolicyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy">DataDatabricksAccountFederationPolicyOidcPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `oidcPolicy`<sup>Required</sup> <a name="oidcPolicy" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.oidcPolicy"></a>

```java
public DataDatabricksAccountFederationPolicyOidcPolicyOutputReference getOidcPolicy();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference">DataDatabricksAccountFederationPolicyOidcPolicyOutputReference</a>

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

---

##### `servicePrincipalId`<sup>Required</sup> <a name="servicePrincipalId" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.servicePrincipalId"></a>

```java
public java.lang.Number getServicePrincipalId();
```

- *Type:* java.lang.Number

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `oidcPolicyInput`<sup>Optional</sup> <a name="oidcPolicyInput" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.oidcPolicyInput"></a>

```java
public IResolvable|DataDatabricksAccountFederationPolicyOidcPolicy getOidcPolicyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy">DataDatabricksAccountFederationPolicyOidcPolicy</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAccountFederationPolicyConfig <a name="DataDatabricksAccountFederationPolicyConfig" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_federation_policy.DataDatabricksAccountFederationPolicyConfig;

DataDatabricksAccountFederationPolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .description(java.lang.String)
//  .oidcPolicy(DataDatabricksAccountFederationPolicyOidcPolicy)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/account_federation_policy#description DataDatabricksAccountFederationPolicy#description}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.oidcPolicy">oidcPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy">DataDatabricksAccountFederationPolicyOidcPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/account_federation_policy#oidc_policy DataDatabricksAccountFederationPolicy#oidc_policy}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/account_federation_policy#description DataDatabricksAccountFederationPolicy#description}.

---

##### `oidcPolicy`<sup>Optional</sup> <a name="oidcPolicy" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.oidcPolicy"></a>

```java
public DataDatabricksAccountFederationPolicyOidcPolicy getOidcPolicy();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy">DataDatabricksAccountFederationPolicyOidcPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/account_federation_policy#oidc_policy DataDatabricksAccountFederationPolicy#oidc_policy}.

---

### DataDatabricksAccountFederationPolicyOidcPolicy <a name="DataDatabricksAccountFederationPolicyOidcPolicy" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_federation_policy.DataDatabricksAccountFederationPolicyOidcPolicy;

DataDatabricksAccountFederationPolicyOidcPolicy.builder()
//  .audiences(java.util.List<java.lang.String>)
//  .issuer(java.lang.String)
//  .jwksJson(java.lang.String)
//  .jwksUri(java.lang.String)
//  .subject(java.lang.String)
//  .subjectClaim(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy.property.audiences">audiences</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/account_federation_policy#audiences DataDatabricksAccountFederationPolicy#audiences}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy.property.issuer">issuer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/account_federation_policy#issuer DataDatabricksAccountFederationPolicy#issuer}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy.property.jwksJson">jwksJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/account_federation_policy#jwks_json DataDatabricksAccountFederationPolicy#jwks_json}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy.property.jwksUri">jwksUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/account_federation_policy#jwks_uri DataDatabricksAccountFederationPolicy#jwks_uri}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy.property.subject">subject</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/account_federation_policy#subject DataDatabricksAccountFederationPolicy#subject}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy.property.subjectClaim">subjectClaim</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/account_federation_policy#subject_claim DataDatabricksAccountFederationPolicy#subject_claim}. |

---

##### `audiences`<sup>Optional</sup> <a name="audiences" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy.property.audiences"></a>

```java
public java.util.List<java.lang.String> getAudiences();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/account_federation_policy#audiences DataDatabricksAccountFederationPolicy#audiences}.

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/account_federation_policy#issuer DataDatabricksAccountFederationPolicy#issuer}.

---

##### `jwksJson`<sup>Optional</sup> <a name="jwksJson" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy.property.jwksJson"></a>

```java
public java.lang.String getJwksJson();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/account_federation_policy#jwks_json DataDatabricksAccountFederationPolicy#jwks_json}.

---

##### `jwksUri`<sup>Optional</sup> <a name="jwksUri" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy.property.jwksUri"></a>

```java
public java.lang.String getJwksUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/account_federation_policy#jwks_uri DataDatabricksAccountFederationPolicy#jwks_uri}.

---

##### `subject`<sup>Optional</sup> <a name="subject" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy.property.subject"></a>

```java
public java.lang.String getSubject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/account_federation_policy#subject DataDatabricksAccountFederationPolicy#subject}.

---

##### `subjectClaim`<sup>Optional</sup> <a name="subjectClaim" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy.property.subjectClaim"></a>

```java
public java.lang.String getSubjectClaim();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/account_federation_policy#subject_claim DataDatabricksAccountFederationPolicy#subject_claim}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAccountFederationPolicyOidcPolicyOutputReference <a name="DataDatabricksAccountFederationPolicyOidcPolicyOutputReference" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_account_federation_policy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference;

new DataDatabricksAccountFederationPolicyOidcPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.resetAudiences">resetAudiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.resetIssuer">resetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.resetJwksJson">resetJwksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.resetJwksUri">resetJwksUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.resetSubject">resetSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.resetSubjectClaim">resetSubjectClaim</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAudiences` <a name="resetAudiences" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.resetAudiences"></a>

```java
public void resetAudiences()
```

##### `resetIssuer` <a name="resetIssuer" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.resetIssuer"></a>

```java
public void resetIssuer()
```

##### `resetJwksJson` <a name="resetJwksJson" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.resetJwksJson"></a>

```java
public void resetJwksJson()
```

##### `resetJwksUri` <a name="resetJwksUri" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.resetJwksUri"></a>

```java
public void resetJwksUri()
```

##### `resetSubject` <a name="resetSubject" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.resetSubject"></a>

```java
public void resetSubject()
```

##### `resetSubjectClaim` <a name="resetSubjectClaim" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.resetSubjectClaim"></a>

```java
public void resetSubjectClaim()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.audiencesInput">audiencesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.issuerInput">issuerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.jwksJsonInput">jwksJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.jwksUriInput">jwksUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.subjectClaimInput">subjectClaimInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.subjectInput">subjectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.audiences">audiences</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.jwksJson">jwksJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.jwksUri">jwksUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.subject">subject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.subjectClaim">subjectClaim</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy">DataDatabricksAccountFederationPolicyOidcPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `audiencesInput`<sup>Optional</sup> <a name="audiencesInput" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.audiencesInput"></a>

```java
public java.util.List<java.lang.String> getAudiencesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.issuerInput"></a>

```java
public java.lang.String getIssuerInput();
```

- *Type:* java.lang.String

---

##### `jwksJsonInput`<sup>Optional</sup> <a name="jwksJsonInput" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.jwksJsonInput"></a>

```java
public java.lang.String getJwksJsonInput();
```

- *Type:* java.lang.String

---

##### `jwksUriInput`<sup>Optional</sup> <a name="jwksUriInput" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.jwksUriInput"></a>

```java
public java.lang.String getJwksUriInput();
```

- *Type:* java.lang.String

---

##### `subjectClaimInput`<sup>Optional</sup> <a name="subjectClaimInput" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.subjectClaimInput"></a>

```java
public java.lang.String getSubjectClaimInput();
```

- *Type:* java.lang.String

---

##### `subjectInput`<sup>Optional</sup> <a name="subjectInput" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.subjectInput"></a>

```java
public java.lang.String getSubjectInput();
```

- *Type:* java.lang.String

---

##### `audiences`<sup>Required</sup> <a name="audiences" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.audiences"></a>

```java
public java.util.List<java.lang.String> getAudiences();
```

- *Type:* java.util.List<java.lang.String>

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `jwksJson`<sup>Required</sup> <a name="jwksJson" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.jwksJson"></a>

```java
public java.lang.String getJwksJson();
```

- *Type:* java.lang.String

---

##### `jwksUri`<sup>Required</sup> <a name="jwksUri" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.jwksUri"></a>

```java
public java.lang.String getJwksUri();
```

- *Type:* java.lang.String

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.subject"></a>

```java
public java.lang.String getSubject();
```

- *Type:* java.lang.String

---

##### `subjectClaim`<sup>Required</sup> <a name="subjectClaim" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.subjectClaim"></a>

```java
public java.lang.String getSubjectClaim();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksAccountFederationPolicyOidcPolicy getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy">DataDatabricksAccountFederationPolicyOidcPolicy</a>

---



